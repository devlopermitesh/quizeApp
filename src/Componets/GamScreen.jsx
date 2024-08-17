import React, { useState, useEffect } from 'react';
import useFetch from '../Hook/Usefetch';
import nlp from 'compromise';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import GlassyIcons from './GlassyIcons';
import Progressbar from './Progressbar';
import Loadingpage from './Loadingpage';
import Errorpage from './Errorpage';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import Settingpage from './Settingpage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMusic } from '../Store/quizslice';

const extractKeyTerms = (question) => {
  const doc = nlp(question);
  const places = doc.places().out('array');
  const objects = doc.nouns().out('array');
  return [...new Set([...places, ...objects])];
};

const fetchUnsplashImage = async (keywords) => {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  let image = null;
  let error = null;

  for (const keyword of keywords) {
    try {
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keyword)}&client_id=${accessKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.results.length > 0) {
        image = result.results[0]; // Get the first image
        break; // Exit the loop if an image is found
      }
    } catch (err) {
      error = `Error fetching image for ${keyword}: ${err.message}`;
    }
  }

  return { image, error };
};

//here is function to remove special code from question and increse more readebility
function decodeHtmlEntities(str) {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

function formatQuestion(question) {
  // Decode HTML entities manually
  const decodedQuestion = decodeHtmlEntities(question);

  // Process with compromise
  const doc = nlp(decodedQuestion);

  // Capitalize the first letter
  let capitalizedQuestion = doc.text().charAt(0).toUpperCase() + doc.text().slice(1);

  // Ensure it ends with a question mark
  if (!capitalizedQuestion.endsWith('?')) {
    capitalizedQuestion += '?';
  }

  return capitalizedQuestion;
}


const GamScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const { stars, value } = location.state || {};
  const [progress, setProgress] = useState(0);
  const [visibleSetting,setvisibleSetting]=useState(false);
  const [ismusicplay,setmusicplay]=useState(useSelector((state)=>state.quiz.musicOn));
  const difficulty = stars > 0 && stars < 2 ? 'hard' : 'easy';
  //for music button and sount button
  const dispatch=useDispatch();
  const apiUrl = `https://opentdb.com/api.php?amount=10&category=${value}&difficulty=${difficulty}&type=multiple`;

  useEffect(() => {
    if (currentQuestionIndex === 9) {
      navigate('/results', { state: { score: progress ,value:value} });
    }
  }, [currentQuestionIndex, progress, navigate]);

  const randomIndexInArray = (array1 = [], array2 = []) => {
    const randomIndex = Math.floor(Math.random() * (array1.length + 1));
    const results = [...array1.slice(0, randomIndex), array2, ...array1.slice(randomIndex)];
    return results;
  };

  const { data, loading: fetchLoading, error: fetchErrorFromHook } = useFetch(apiUrl);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        if (fetchLoading) return;
        if (fetchErrorFromHook) throw new Error(fetchErrorFromHook);

        const resultsWithImages = [];

        for (const quiz of data.results) {
          const keywords = extractKeyTerms(quiz.question);
          const { image, error } = await fetchUnsplashImage(keywords);

          // Choose image size based on device type
          const imageUrl = isMobile
            ? image.urls.small
            : isTablet
            ? image.urls.regular
            : isDesktop
            ? image.urls.full
            : image.urls.small;

          resultsWithImages.push({
            id: quiz.question,
            question: quiz.question,
            options: randomIndexInArray(quiz.incorrect_answers, quiz.correct_answer),
            correctAnswer: quiz.correct_answer,
            image: image ? imageUrl : null,
          });
        }

        setQuizData(resultsWithImages);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching quiz data:', err);
        setFetchError(err.message);
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [data, fetchLoading, fetchErrorFromHook]);

  const handleOptionClick = (correctAnswer, selectedOption) => {
    if (selectedOption === correctAnswer) {
      if (progress < 100) {
        setProgress((prev) => prev + 10);
      }
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quizData.length);
  };

  if (loading) return <Loadingpage />;
  if (fetchError || fetchErrorFromHook) return <Errorpage />;

  const currentQuiz = quizData[currentQuestionIndex] || {};
const handlemusic=()=>{
  dispatch(toggleMusic({action:!ismusicplay}))
  setmusicplay((prev)=>!prev)
}
const handelcancel=(newchange)=>{
  setvisibleSetting(newchange)
}
  return (
    <>
    <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col items-center'>
    <header className='w-full h-12 flex'>
        <GlassyIcons icons={'setting'} className={'float-start ms-6'}  onClick={()=>setvisibleSetting(true)}/>
        <GlassyIcons icons={(ismusicplay)?'onmusic':"offmusic"} className={'float-start ms-8'} onClick={()=>handlemusic()}/>
        <Progressbar containerclass={'ms-8'} value={progress} />
      </header>
      <div
        className="bg-center bg-cover bg-no-repeat w-full h-1/2 flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.49), rgba(0,0,0,.36)), url(${currentQuiz.image || 'https://wallpapers.com/images/featured/cartoon-pictures-q3hxkk0gmw6vnivj.jpg'})`,
        }}
      >
        <div className='questioncontainer text-center text-white text-xl overflow-y-clip p-2 py-4 flex items-center'>
          {formatQuestion(currentQuiz.question)}
        </div>
      </div>
      <ul className='flex flex-col w-full mt-5 space-y-3'>
        {currentQuiz.options && currentQuiz.options.map((option, index) => (
          <li key={index}>
            <Button
              text={option}
              className='mx-12 w-1/2 md:w-1/4 text-white text-xl md:text-2xl hover:bg-violet-700'
              onClick={() => handleOptionClick(currentQuiz.correctAnswer, option)}
            />
          </li>
        ))}
      </ul>
    </div>
{   visibleSetting &&
 <Settingpage  onchange={handelcancel} ismusicplay={ismusicplay} handelmusicChange={handlemusic} ></Settingpage>}
    </>
  );
};

export default GamScreen;

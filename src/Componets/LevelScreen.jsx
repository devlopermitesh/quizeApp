import React from 'react'
import Button from './Button'
import { IoMdArrowRoundBack } from "react-icons/io";
import Child from './chidllevel';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const LevelScreen = () => {
  const getRandomColor = () => {
    const colors = [
      'bg-[#E87A00]',  // Orange
      'bg-[#00F7FF]',  // Light Blue
      'bg-[#4CAF50]',  // Green
      'bg-[#FFC107]',  // Amber
      'bg-[#03A9F4]',  // Light Blue
      'bg-[#FF5722]',  // Deep Orange
      'bg-[#009688]',  // Teal
      'bg-[#8BC34A]',  // Light Green
      'bg-[#FF9800]',  // Orange
    ];
    
    // Get a random index from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const levels = [
    { value: '9', label: 'General Knowledge', stars: 0 },
    { value: '10', label: 'Entertainment: Books', stars: 0 },
    { value: '11', label: 'Entertainment: Film', stars: 0 },
    { value: '12', label: 'Entertainment: Music', stars: 0 },
    { value: '13', label: 'Entertainment: Musicals & Theatres', stars: 0 },
    { value: '14', label: 'Entertainment: Television', stars: 0 },
    { value: '15', label: 'Entertainment: Video Games', stars: 0 },
    { value: '16', label: 'Entertainment: Board Games', stars: 0 },
    { value: '17', label: 'Science & Nature', stars: 0 },
    { value: '18', label: 'Science: Computers', stars: 0 },
    { value: '19', label: 'Science: Mathematics', stars: 0 },
    { value: '20', label: 'Mythology', stars: 0 },
    { value: '21', label: 'Sports', stars: 0 },
    { value: '22', label: 'Geography', stars: 0 },
    { value: '23', label: 'History', stars: 0 },
    { value: '24', label: 'Politics', stars: 0 },
    { value: '25', label: 'Art', stars: 0 },
    { value: '26', label: 'Celebrities', stars: 0 },
    { value: '27', label: 'Animals', stars: 0 },
    { value: '28', label: 'Vehicles', stars: 0 },
    { value: '29', label: 'Entertainment: Comics', stars: 0 },
    { value: '30', label: 'Science: Gadgets', stars: 0 },
    { value: '31', label: 'Entertainment: Japanese Anime & Manga', stars: 0 },
    { value: '32', label: 'Entertainment: Cartoon & Animations', stars: 0 },
  ];

  
    const navigate=useNavigate();
  return (
    <div className='absolute top-0 left-0 h-auto w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col'>
<i  onClick={()=>navigate('/')}
className='float-start text-[#00F7E8] text-4xl absolute h-10 w-10  border-[3px] border-[#00F7E8] m-2 clip-custom-hexagon cursor-pointer'>
<IoMdArrowRoundBack></IoMdArrowRoundBack>
</i>
        <h2 className='text-[#00F7E8] text-center font-bold text-2xl'>levels</h2>
        <div className='flex flex-wrap h-full mt-20'>

{levels && levels.map((level)=><Child level={level.label} key={level.value} value={level.value} bgcolor={getRandomColor()}
  stars={level.stars}
></Child>)}
      </div>
        </div>
  )
}

export default LevelScreen
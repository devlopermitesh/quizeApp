import { createSlice } from "@reduxjs/toolkit";
import localforage from 'localforage';
const initialState={
    musicOn:true,
    soundOn:true,
     levels : [
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
  ],
  optionslanguage:['hindi','english','gujrati'],
  selectedlanguage:"english"

}

const quize=createSlice({
    name:"quize",
    initialState:initialState,
    reducers:{
        toggleMusic(state,{payload}){
            state.musicOn=payload.action

        },
        toggleSound(state){
state.soundOn=!state.soundOn;
        },
        setLevels(state, { payload }) {
            state.levels = payload;
          },
        updateLevels(state,{payload}){
const {value,stars}=payload;
state.levels=state.levels.map((level)=>(level.value===value)?{...level,stars:stars}:level)
console.log(state.levels)
localforage.setItem('quizLevels', state.levels).catch((err) => {
    console.error('Error saving levels to localForage', err);
})
        },
        
        
    }
})

export const {toggleMusic,toggleSound,updateLevels,setLevels}= quize.actions;


export const loadLevelsFromLocalForage = () => async dispatch => {
    try {
      const levels = await localforage.getItem('quizLevels');
      if (levels) {
        dispatch(setLevels(levels));
      }
    } catch (err) {
      console.error('Error loading levels from localForage', err);
    }
  };
  



export default quize.reducer;

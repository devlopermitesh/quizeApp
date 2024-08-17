import React from 'react'
import Button from './Button'
import { IoMdArrowRoundBack } from "react-icons/io";
import Child from './chidllevel';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import { useSelector } from 'react-redux';
const LevelScreen = () => {
const levels=useSelector((state)=>state.quiz.levels)

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
  
    const navigate=useNavigate();
  return (
    <motion.div initial={{x:300}} animate={{x:0}} transition={{duration:0.5}} className='absolute top-0 left-0 h-auto w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col overflow-hidden'>
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
        </motion.div>
  )
}

export default LevelScreen
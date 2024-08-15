import React from 'react'
import { RiGhostFill } from "react-icons/ri";
import Button from './Button';
import { useNavigate } from 'react-router-dom';
const Errorpage = () => {
    const navigate=useNavigate()
  return (
    
    <div className='absolute h-full w-full top-0 left-0  bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col justify-center items-center space-y-24'>
<RiGhostFill className='text-5xl text-center text-[white] animate-spin '/>
<h1 className='text-white text-center font-inknut text-3xl'>OPPs! sorry try Again</h1>
<b className='text-center text-gray-500'>sorry!for continue you can refresh or just come back again</b>
<Button text={'Return Home'} className='text-white font-inknut' onClick={()=>navigate('/')} ></Button>
</div>
  )
}

export default Errorpage
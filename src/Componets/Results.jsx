import React from 'react'
import Button from './Button'
import { useLocation, useNavigate } from 'react-router-dom'

const Results = () => {
  const location=useLocation();
   const {score}=location.state;
const navigate=useNavigate();
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#100425] via-[#2b046f] to-[#3C049D] flex flex-col items-center  space-y-16'>
      <h1 className='text-center text-2xl text-[#00F7E8] font-inknut capitalize'>results</h1>
      <div className='bg-[#3867AE] h-1/2 w-1/2 rounded-3xl text-white text-center text-2xl font-inknut flex flex-col items-center space-y-10'>
      <h2 className='mt-10 capitalize'>your final score:</h2>
<span className='h-1/2 w-1/2 bg-[#00F7E8] rounded-full text-4xl text-center '>
<b className='relative top-10 text-6xl'>{score}</b></span>
      </div>
      <Button text='Try Again' className='text-white font-inknut' onClick={()=>navigate("/levels")}></Button>
    </div>
  )
}

export default Results
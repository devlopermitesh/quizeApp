import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react';
import Button from './Button';
import GlassyIcons from './GlassyIcons';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMusic } from '../Store/quizslice';

const Settingpage = ({onchange, handelmusicChange, ismusicplay}) => {
    const location = useLocation();
    const [isSoundOn, setIsSoundOn] = useState(true);
    const isMusicOn=ismusicplay
//dispatch for music ,sound button
const dispatch=useDispatch();

    //link for sharing with friends
    const url = `https://wa.me/?text=${encodeURIComponent(location)}`;

const navigate=useNavigate()
    const handleSoundToggle = () => {

        setIsSoundOn(!isSoundOn);
    };
    const handleMusicToggle = () => {
        dispatch(toggleMusic({action:!isMusicOn}))
        handelmusicChange(!isMusicOn);
    };
const handelcancel=()=>{
onchange(false)
}
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col items-center opacity-80 justify-center'>
        {/* //setting container */}
        <AnimatePresence>
<motion.div initial={{x:-400}} animate={{x:10}} exit={{x:-300}} transition={{duration:1.2}} className='h-auto w-1/2 border-2 border-[#00F7E8] rounded-3xl from-[#3C049D] via-[#2b046f] to-[#100425] shadow-md 
 shadow-[#00F7E8] overflow-y-auto'>
  <div className="flex items-center justify-between  w-full ">
       
<h2 className='text-white text-2xl font-inknut ms-10'>Setting</h2>
<span className="flex-shrink-3 me-2" onClick={handelcancel}>
                <GlassyIcons 
                    className="text-[#00F7E8] text-2xl md:text-3xl" 
                    icons="cancel"
                />
            </span>
</div>
<div className='flex flex-wrap w-3/4 mx-auto justify-around mt-6'>
<div className='soundbutton '>
                {/* Sound button */}
<motion.div
                    onClick={handleSoundToggle}
                    className={`relative w-14 h-8 bg-[#7943d7] border-2 rounded-lg flex items-center cursor-pointer ${isSoundOn ? 'shadow-lg' : 'shadow-md'} `}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {/* Toggle Knob */}
                    <motion.div
                        className={`absolute top-1 left-1 w-5 h-5  bg-[#100425]  rounded-full shadow-md transition-transform duration-300 ${isSoundOn ? 'translate-x-6' : ''}`}
                    >
                         <div className=" text-white text-xl -mt-1 cursor-pointer">
                    {isSoundOn ? (
                        <span role="img" aria-label="Sound On">🔊</span>
                    ) : (
                        <span role="img" aria-label="Sound Off">🔇</span>
                    )}
                </div>

                    </motion.div>
                </motion.div>
</div>
<div className='musicbutton '>
                {/* Sound button */}
<motion.div
                    onClick={handleMusicToggle}
                    className={`relative w-14 h-8 bg-[#7943d7] border-2 rounded-lg flex items-center cursor-pointer ${isMusicOn ? 'shadow-lg' : 'shadow-md'} `}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {/* Toggle Knob */}
                    <motion.div
                        className={`absolute top-1 left-1 w-5 h-5  bg-[#100425]  rounded-full shadow-md transition-transform duration-300 ${isMusicOn ? 'translate-x-6' : ''}`}
                    >
                         <div className=" text-white text-xl -mt-1 cursor-pointer">
                    {isMusicOn ? (
                        <span role="img" aria-label="Music On">🎵</span>
                    ) : (
                        <span role="img" aria-label="Music Off">🔇</span>
                    )}
                </div>

                    </motion.div>
                </motion.div>
</div>
</div>
<div className='flex flex-col items-center w-full'>
{/* language button here  */}
{/* <Button text={"language"} className='text-white text-2xl font-bold p-0 mt-4  hover:shadow-md hover:shadow-black'></Button> */}
{/* invite button here  */}
<Button text={"Invite"} onClick={()=>window.open(url, '_blank')} className='text-white text-2xl font-bold px-14 mt-2  hover:shadow-md hover:shadow-black'></Button>
{/* about us  */}
<Button text={'About us'} onClick={()=>navigate('/about')} className='text-white text-2xl font-bold px-10 mt-2  hover:shadow-md hover:shadow-black'></Button>
</div>


</motion.div>
</AnimatePresence>
</div>
)
}

export default Settingpage
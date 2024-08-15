import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { TbMusicOff } from "react-icons/tb";
const GlassyIcons = ({icons,className,...props}) => {
function geticons(){
    switch (icons) {
        case "setting":
            return <IoMdSettings />
       case "music":
                return <TbMusicOff />
        
        default:
            break;
    }
}
  return (
    <button className={`glassybtn p-1 text-3xl text-white opacity-80 ${className} `} {...props}>
{geticons()}
    </button>
  )
}

export default GlassyIcons
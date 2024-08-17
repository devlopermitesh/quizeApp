import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { TbMusicOff } from "react-icons/tb";
import { IoMusicalNotesSharp } from "react-icons/io5";
const GlassyIcons = ({icons,className,...props}) => {
function geticons(){
    switch (icons) {
        case "setting":
            return <IoMdSettings />
       case "onmusic":
                return <IoMusicalNotesSharp/>
      case "offmusic":
          return <TbMusicOff/>         
       case "cancel":
                  return <MdOutlineCancel/>
          
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
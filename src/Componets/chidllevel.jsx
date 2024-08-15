import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Child = ({ level, bgcolor, stars = 0,value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gamescreen', { state: { level,stars,value } });
  };

  // Determine star color based on the number of stars
  const getStarColor = (index) => {
    return index < stars ? 'text-yellow-600' : 'text-gray-300';
  };

  return (
    <div className={`w-1/2 h-36 flex justify-center items-center relative ${(stars<1)?"opacity-50":"opacity-100"} cursor-pointer`} onClick={handleClick}  key={value}>
      <span className='border-white border-[1px] relative right-16 bottom-28 mb-10'>
        <FaStar className={`${getStarColor(0)} mt-2 absolute top-20 left-12 text-5xl z-50`} />
        <FaStar className={`${getStarColor(1)} mt-2 absolute top-10 left-[6.5rem] text-5xl z-50`} />
        <FaStar className={`${getStarColor(2)} mt-2 absolute top-20 left-40 text-5xl z-50`} />
      </span>
      <span className={`clip-custom-triangle h-32 w-32 ${bgcolor} text-center text-white font-bold`}>
        <b className='relative top-14 font-inknut text-sm'>{level}</b>
      </span>
    </div>
  );
};

export default Child;

import React from 'react';

// Button component definition
const Button = ({ text, bgColor = '#500EC4', activeBgColor = '#280960', className = '', ...props }) => {
  return (
    <button
      className={`px-10 py-2 rounded-md border-[1px] bg-[${bgColor}] active:bg-[${activeBgColor}] ${className} `}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

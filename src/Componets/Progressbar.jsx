import React from 'react';

const Progressbar = ({ containerclass = '', barclass = '', value = 0 }) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={`w-full h-full glassyprogress rounded-lg border-[3px] ${containerclass} overflow-hidden`}
    >
      <div
        className={`h-full bg-violet-700 rounded-lg ${barclass} text-end text-violet-900 text-xl `}
        style={{ width: `${clampedValue}%` }}
      
      >
        {value}
      </div>
    </div>
  );
};

export default Progressbar;

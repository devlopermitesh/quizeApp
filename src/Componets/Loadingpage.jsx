import React, { useState, useEffect } from 'react';

const Loadingpage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 100); // Update every 100ms for a smooth animation

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='absolute text-white top-0 left-0 h-full w-full bg-[#100425] flex flex-col justify-center items-center text-lg md:text-xl '>
      <b> loading masterpiece...</b>
      <div className="w-52 sm:w-72 h-6 border-2 border-solid border-[#00F7E8] rounded-md mt-4 overflow-hidden">
        <div
          className="h-6  bg-[#00F7E8]  "
          style={{ width: `${progress}%`, transition: 'width 0.3s' }}
        >{progress}</div>
      </div>
    </div>
  );
}

export default Loadingpage;

import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const FirstScreen = () => {
  const navigate=useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    class Bubbles {
      constructor({ positionX, positionY }, { vx, vy }, radius) {
        this.x = positionX;
        this.y = positionY;
        this.radius = radius;
        this.velocityX = vx;
        this.velocityY = vy;
      }

      Draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "white";
        ctx.stroke();
      }

      Update() {
        this.Draw();
        // Update position
        this.x += this.velocityX;
        this.y -= this.velocityY; // Move upwards

        // Reset position if bubble moves off the top
        if (this.y < -this.radius) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width; // Randomize new x position
          this.velocityX = (Math.random() - 0.5) * 2; // Randomize velocity
          this.velocityY = (Math.random() - 0.5) * 2; // Randomize velocity
        }
      }
    }

    const BubblesArray = [];
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = (Math.random() - 0.5) * 2; // Random velocity between -1 and 1
      const vy = Math.random() * 2 + 1; // Velocity upwards

      const radius = 9;

      const bubble = new Bubbles(
        { positionX: x, positionY: y },
        { vx: vx, vy: vy },
        radius
      );
      BubblesArray.push(bubble);
    }

    const Animation = () => {
      requestAnimationFrame(Animation);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BubblesArray.forEach((bubble) => bubble.Update());
    };

    Animation(); // Start the animation loop

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2.2;
    };

    // Initialize canvas size
    resizeCanvas();

    // Add resize event listener
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);


const handelPlay=()=>{
  setIsAnimated(true);
  setTimeout(()=>navigate('/levels'),500)
}

const handelAbout=()=>{
  setIsAnimated(true);
  setTimeout(()=>navigate('/about'),500)
}


  return (
    <motion.div initial={{x:0}} animate={{x:isAnimated ? -1000 : 0}} transition={{duration:3}} className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex flex-col justify-center items-center'>
      <canvas
        ref={canvasRef}
        className='absolute top-0 opacity-80 blur-effect'
      />
      <h2 className='block text-4xl font-bold text-gradient font-inknut capitalize z-10 '>
        Brain Mindset
      </h2>
      <div className=' w-full relative top-36  text-white space-y-10 text-2xl font-inknut'>
        <span>
      <b className='text-white text-2xl font-inknut  capitalize block'>Let`s 
        play!</b>
     <b className='text-xl block'>play now and level up</b>
     </span>
<div className='flex-col flex justify-center items-center gap-y-5'>
<Button text="Play now" onClick={handelPlay} className='bg-violet-600'/>
<Button text="About us" onClick={handelAbout} className='bg-tr' />
     </div>
     
        </div>
    </motion.div>
  );
};

export default FirstScreen;

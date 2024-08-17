import React, { useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { isDesktop } from 'react-device-detect';
import sound from "../public/summer-vibes-158665.mp3";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMusic } from './Store/quizslice';
import { loadLevelsFromLocalForage } from './Store/quizslice';
function App() {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const isMusicPlay = useSelector((state) => state.quiz.musicOn);
  useEffect(() => {
    dispatch(loadLevelsFromLocalForage());
  }, [dispatch]);


  useEffect(() => {
    if (isMusicPlay) {
      audioRef.current = new Audio(sound);
      audioRef.current.loop = true;
      
      const playMusic = () => {
        audioRef.current.play().catch((error) => {
          console.log('User interaction is required to play the audio:', error);
        });
      };

      const event = isDesktop ? "mousemove" : "touchmove";
      document.addEventListener(event, playMusic);

      return () => {
        document.removeEventListener(event, playMusic);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, [isMusicPlay,dispatch])
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

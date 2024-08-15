import React, { useEffect, useState } from 'react'
import useFetch from '../Hook/Usefetch';
import Button from './Button'
import Loadingpage from './Loadingpage';
const Aboutus = () => {
    const url='https://api.github.com/users/devlopermitesh'
const { data, loading, error } = useFetch(url);
if (loading) return<Loadingpage></Loadingpage>;
if (error) return <p>Error: {error}</p>;
  return (

    <div className='absolute top-0 left-0 space-y-5 h-full w-full bg-gradient-to-b from-[#3C049D] via-[#2b046f] to-[#100425] flex  items-center flex-col'>
<img className= ' h-56 w-56 rounded-full bg-white' src={data?.avatar_url} height={100} width={100}></img>
<h2 className='text-3xl font-bold  capitalize text-white'>HI
  <span className="animate-shake text-4xl animate-bounce">👋</span> ! i am mitesh</h2>
  <b className=' text-gradient-custom'>i am a web devloper and i enjoy making cool ui website/game,</b>
  <i className='text-white text-2xl'>i hope you wil like play this game ,<br></br>please check my git to get more 
  cool projects
    <br></br></i>
<a
      href="https://github.com/devlopermitesh"
      target="_blank"
      rel="noopener noreferrer"
      className='bg-[#500EC4] px-10 py-2 rounded-md border-[1px] active:bg-[#280960] text-white inline-block'>
      follow
    </a>
</div>)

}

export default Aboutus
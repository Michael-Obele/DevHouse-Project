import React, { useState } from 'react';
import './index.css';
import { NavBar } from './NavBar';
import { ReactComponent as Listen } from './listen.svg';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <div className='bg-light pb-80 h-screen body relative w-full md:w-auto'>
        <Listen className='listen absolute top-0 right-10' />
        <div className='absolute top-60 left-5 lg:left-40 sm:left-20'>
          <h1>Listening isn't</h1>
        </div>
        <div className='absolute top-80 left-10 lg:left-60 sm:left-40'>
          <h1>everything now</h1>
        </div>
        <div className='bg-m-g rounded-bl-3xl rounded-tl-3xl border-transparent absolute bottom-60 left-40 box-border h-24 w-1/2 pl-2.5  border-4 z-10'>
          <p className='text-justify font-normal text-base md:text-md lg:text-2xl'>
            There is more, you can now buy shares of songs from spotify using
            our smarts contracts and that's all you will ever need to begin
          </p>
        </div>
        <div className='bg-m-blue rounded-bl-3xl rounded-tl-3xl border-transparent absolute bottom-60 box-border h-24 w-1/2 p-4 border-4 z-0 left-36'></div>

        <div className='bg-m-blue rounded-lg border-transparent absolute bottom-20 box-border h-fit w-fit p-4 border-4 left-1/2'>
          <p className='text-white'>Explore Shares Now</p>
        </div>
      </div>
      <div className='bg-green-400 h-screen body'>
        <div id='box'></div>
      </div>
    </>
  );
}

export default App;

import { NavBar } from './NavBar';
import './index.css';
import { ReactComponent as Listen } from './listen.svg';

import React, { useState } from 'react';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <div className='bg-light h-screen body relative w-full md:w-auto'>
        <Listen className='listen absolute top-0 right-10' />
        <div className='absolute top-60 left-5 lg:left-40 sm:left-20'>
          <h1>Listening isn't</h1>
        </div>
        <div className='absolute top-80 left-10 lg:left-60 sm:left-40'>
          <h1>everything now</h1>
        </div>
        <div className='bg-m-g rounded-bl-3xl rounded-tl-3xl border-transparent  absolute bottom-60 left-40 box-border h-28 w-1/2 p-4 border-4 z-10'></div>
        <div className='bg-blue-700 rounded-bl-3xl rounded-tl-3xl border-blue-700  absolute bottom-60 box-border h-28 w-1/2 p-4 border-4 z-0 left-36'></div>
      </div>
      <div className='bg-green-400 h-screen body'>
        <div id='box'></div>
      </div>
    </>
  );
}

export default App;

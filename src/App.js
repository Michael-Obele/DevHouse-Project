import { NavBar } from './NavBar';
import './index.css';
import logo from './logo.png';
import React, { useState } from 'react';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <>
      <NavBar darkMood={darkMood} logo={logo} setDarkMood={setDarkMood} />
      <div className='bg-light h-screen body relative w-full md:w-auto'>
        <div className='absolute top-60 left-5 lg:left-40 sm:left-20'>
          <h1>Listening isn't</h1>
        </div>
        <div className='absolute top-80 left-10 lg:left-60 sm:left-40'>
          <h1>everything now</h1>
        </div>
      </div>
      <div className='bg-green-400 h-screen body'>
        <div id='box'></div>
      </div>
    </>
  );
}

export default App;

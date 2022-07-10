import { Here } from './Here_Section/Here';
import React, { useState } from 'react';
import './index.css';
import { NavBar } from './NavBar/NavBar';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <Here />
      <div className='bg-[#000812] h-screen body'>
        <div className='p-10'>
          <p className='text-center text-white text-xl font-bold my-0 mx-auto py-4 text-[36px] border-r-2 border-white line-1 anim-typewriter'>
            Our Mechanism
          </p>
        </div>
        {/* <div id='box'></div> */}
      </div>
    </>
  );
}

export default App;

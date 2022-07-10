import { Here } from './Here_Section/Here';
import React, { useState } from 'react';
import './index.css';
import { NavBar } from './NavBar/NavBar';
import { useInView } from 'react-intersection-observer';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <Here />
      <div className='bg-[#000812] h-screen body'>
        <div className='p-10' ref={ref}>
          <p
            className={
              inView
                ? 'text-center text-white text-xl font-bold my-0 mx-auto py-4 text-[36px] border-r-2 border-white line-1 anim-typewriter'
                : 'text-center text-white text-xl font-bold my-0 mx-auto border-r-2 py-4 line-2 anim-blink'
            }>
            Our Mechanism
          </p>
        </div>
        {/* <div id='box'></div> */}
      </div>
    </>
  );
}

export default App;

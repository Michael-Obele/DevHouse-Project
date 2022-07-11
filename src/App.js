import { Here } from './Here_Section/Here';
import React, { useState } from 'react';
import './index.css';
import { NavBar } from './NavBar/NavBar';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as One } from './SVG/1.svg';
import { ReactComponent as OneImg } from './SVG/oneImg.svg';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <Here />
      <div className='bg-[#000812] h-screen relative'>
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
        <div className='box-g absolute rounded-l-3xl border-l-[5px] border-l-[#1ed760] border-r-0 border-y-0 top-40 right-0 box-border h-fit flex flex-col md:flex-row lg:h-[14rem] w-3/4 border-4 lg:justify-between'>
          <One className=' my-[1rem] mx-[2rem]' />
          <div className='w-fit h-auto mx-[1rem]'>
            <h2 className='capitalize text-[#1ED760] text-left'>
              smart contract will payout shareholders
            </h2>
            <p></p>
          </div>
          <OneImg className='my-[1rem] mx-[2rem]' />
        </div>
      </div>
    </>
  );
}

export default App;

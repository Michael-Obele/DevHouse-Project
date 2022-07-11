import { Here } from './Here_Section/Here';
import React, { useState } from 'react';
import './index.css';
import { NavBar } from './NavBar/NavBar';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as One } from './SVG/1.svg';
import { ReactComponent as OneImg } from './SVG/oneImg.svg';
import { InfoList } from './Info';

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
      <section className='bg-[#000812] relative pb-[500rem]'>
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
        {InfoList.map((item, index) => (
          <div key={item.title} className={item.divClass}>
            <item.image1 className={item.image1Class} />
            <div className='w-fit h-auto my-auto mx-[1rem]'>
              <h2 className='capitalize text-[#1ED760] font-[700] text-left mb-1'>
                {item.h2}
              </h2>
              <p className='text-white font-[400] lowercase text-left'>
                {item.p}
              </p>
            </div>
            <item.image2 className={item.image2Class} />
          </div>
        ))}
      </section>
    </>
  );
}

export default App;

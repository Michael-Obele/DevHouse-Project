import React from 'react';
import { InfoList } from './InfoList';
import { useInView } from 'react-intersection-observer';
import { OurMech } from './OurMechText';
import './slideAnimation.css';

export function OurMechanism({}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} className='bg-[#000812] relative pb-[100rem]'>
      {/* Typed Character */}
      <OurMech />
      {/* Typed Character */}
      {/* List of Our Mechanism */}
      <div>
        {InfoList.map((item, index) => (
          <div
            key={item.title}
            className={inView ? item.divClassA : item.divClassB}>
            <item.image1 className='my-[1em] md:my-auto mx-[2rem] w-[30%] md:h-[11rem] md:w-[11rem]' />
            <div className='w-fit flex-col h-auto my-auto mx-[1em]'>
              <h2 className='capitalize text-[#1ED760] text-[60%] md:text-[2ch] font-[700] text-left mb-1'>
                {item.h2}
              </h2>
              <p className='text-white font-[400] text-[62%] lowercase text-left'>
                {item.p}
              </p>
            </div>
            <item.image2 className='mx-auto my-4 h-auto w-[45%] md:h-[65%] md:w-3/4 md:my-auto' />
          </div>
        ))}
      </div>
      {/* List of Our Mechanism */}
    </section>
  );
}

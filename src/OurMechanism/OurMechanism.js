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
    <section
      ref={ref}
      className='bg-[#000812] bg-mech relative pb-[10rem] md:pb-[140rem] lg:pb-[100rem]'>
      {/* Typed Character */}
      <OurMech />
      {/* Typed Character */}
      {/* List of Our Mechanism */}
      <div>
        {InfoList.map((item, index) => (
          <div
            key={item.title}
            className={inView ? item.divClassA : item.divClassB}>
            <item.image1 className='my-[1em] md:my-auto mx-[2rem] w-[30%] md:h-[10rem] md:w-[10.3rem]' />
            {/* <p className='font-[800] text-[256px] box-t'>{item.title}</p> */}
            <div className='w-fit flex-col h-auto my-auto mx-[1em]'>
              <h2 className='capitalize text-center text-[#1ED760] text-[20px] md:text-[23px] font-[700] md:text-left mb-1'>
                {item.h2}
              </h2>
              <p className='text-white font-[400] text-[16px] lowercase text-center md:text-left'>
                {item.p}
              </p>
            </div>
            <item.image2 className='mx-auto mt-[2.813rem] mb-[2rem] h-[9.3rem] w-[14.25rem] md:h-[12.214rem] md:w-[18.75rem] md:my-auto' />
          </div>
        ))}
      </div>
      {/* List of Our Mechanism */}
    </section>
  );
}

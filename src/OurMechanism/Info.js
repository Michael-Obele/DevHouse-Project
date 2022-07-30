import React from 'react';
import { useInView } from 'react-intersection-observer';

const Info = ({ divClassA, divClassB, image1, h2, p, image2 }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const SVG1 = image1;
  const SVG2 = image2;
  return (
    <>
      <div ref={ref} className={inView ? divClassA : divClassB}>
        <SVG1 className='my-[1em] md:my-auto mx-[2rem] w-[30%] md:h-[10rem] md:w-[10.3rem]' />
        <div className='w-fit flex-col h-auto my-auto mx-[1em]'>
          <h2 className='capitalize text-center text-[#1ED760] text-[1.25rem] md:text-[1.438rem] font-[700] md:text-left mb-1'>
            {h2}
          </h2>
          <p className='text-white font-[200] text-[1rem] lowercase text-center md:text-left'>
            {p}
          </p>
        </div>
        <SVG2 className='mx-auto mt-[2.813rem] mb-[2rem] h-[9.3rem] w-[15.25rem] md:h-[12.214rem] md:w-[23.75rem] lg:h-[12.214rem] lg:w-[18.75rem] md:mx-2 md:my-auto' />
      </div>
    </>
  );
};

export default Info;

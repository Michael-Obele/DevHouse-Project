import React from 'react';
import { useInView } from 'react-intersection-observer';

export function OurMech() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <div className='p-10' ref={ref}>
      <p
        className={
          inView
            ? 'text-center text-white text-xl font-bold my-0 mx-auto py-4 text-[36px] border-r-2 border-white line-1 anim-typewriter-OurMech'
            : 'text-center text-white text-xl font-bold my-0 mx-auto border-r-2 py-4   anim-blink'
        }>
        Our Mechanism
      </p>
    </div>
  );
}

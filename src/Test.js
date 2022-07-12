import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}>
      <span aria-label='Wave'>👋</span>
    </div>
  );
};

export default LazyAnimation;

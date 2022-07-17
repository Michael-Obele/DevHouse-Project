import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurStockText } from './OurStockText';

export function OurStocks({}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} className='bg-[#000812] relative pb-[30rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
    </section>
  );
}

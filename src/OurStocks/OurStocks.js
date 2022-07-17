import { StockNav } from './StockNav';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurStockText } from './OurStockText';

export function OurStocks({}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section className='bg-[#000812] relative pb-[30rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
      <StockNav />
      <div className='pb-[10rem]'></div>
      <div className='flex flex-row items-center justify-center'>
        <span className='border-b-2 mx-2 px-[40vw] border-green-700'> {}</span>
        <p className='bg-transparent py-auto text-gray-600 font-medium text-[1rem]'>
          Show More
        </p>
      </div>
    </section>
  );
}

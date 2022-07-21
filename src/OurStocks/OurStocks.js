import { MusicPlayer } from './MusicPlayer';
import { StockNav } from './StockNav';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurStockText } from './OurStockText';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export function OurStocks() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section className=' relative pb-[10rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
      <StockNav />
      <MusicPlayer />
      <MusicPlayer />
      <div className='container flex flex-row items-center justify-center'>
        <span className='border-b-[1px] ml-[64px] mr-[32px] pl-[78vw] border-[#1ED760]'></span>
        <span className='flex flex-row items-center text-white'>
          <p className='bg-transparent py-auto font-medium text-[1rem]'>
            Show More
          </p>
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </section>
  );
}

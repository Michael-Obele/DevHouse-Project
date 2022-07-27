import { MusicPlayer } from './MusicPlayer';
import { StockNav } from './StockNav';
import React from 'react';
import { OurStockText } from './OurStockText';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export function OurStocks() {
  return (
    <section className='relative pb-[8rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
      <StockNav />
      <MusicPlayer />
      <MusicPlayer />
      <div className='container flex flex-row items-center justify-center'>
        <span className='border-b-[.0625rem] ml-[4rem] mr-[2rem] pl-[65vw] lg:pl-[78vw] border-[#1ED760]'></span>
        <span className='flex flex-row items-center text-white cursor-pointer'>
          <p className='bg-transparent py-auto font-medium text-[1rem]'>
            Show More
          </p>
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </section>
  );
}

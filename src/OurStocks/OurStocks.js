import { MusicPlayer } from './MusicPlayer';
import { StockNav } from './StockNav';
import React from 'react';
import { OurStockText } from './OurStockText';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Player from './Player';

export function OurStocks() {
  return (
    <section id='Stocks' className='relative pb-[8rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
      <StockNav />
      <MusicPlayer />
      <MusicPlayer />
      <div className='w-[375px] md:container box-border flex flex-row items-center space-x-[6.4vw] md:space-x-0 justify-center'>
        <span className='border-b-[.0625rem] md:ml-[4rem] md:mr-[2rem] pl-[12rem] md:pl-[70.4vw] lg:pl-[78vw] border-[#1ED760]'></span>
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

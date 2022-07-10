import React from 'react';
import { ReactComponent as Listen } from './listen.svg';

export function Here({}) {
  return (
    <div className='bg-light bg-[#1ed760] pb-80 h-screen body relative w-full md:w-auto'>
      <Listen className='w-[calc(28vw+(30-28)*((100vw-300px)/(1600-300)))] absolute top-0 right-10' />
      <div className='absolute top-60 left-5 lg:left-40 sm:left-20'>
        <h1 className='h1-calc font-[700] leading-[87.42px] text-[#2941ab]'>
          Listening isn't
        </h1>
      </div>
      <div className='absolute top-80 left-10 lg:left-60 sm:left-40'>
        <h1 className='h1-calc font-[700] leading-[87.42px] text-[#2941ab]'>
          everything now
        </h1>
      </div>
      <div className='bg-[#1ed760] rounded-l-3xl border-transparent absolute bottom-60 md:left-40 left-[4rem] box-border md:pt-3 lg:pt-0 h-24 w-1/2 pl-2.5  border-4 z-[2]'>
        <p className='text-justify font-normal p-calc h-fit w-fit leading-4 md:leading-5 lg:leading-8'>
          There is more, you can now buy shares of songs from spotify using our
          smarts contracts and that's all you will ever need to begin
        </p>
      </div>
      <div className='bg-[#0e173c] rounded-bl-3xl rounded-tl-3xl border-transparent absolute bottom-60 box-border h-24 w-1/2 p-4 border-4 z-0 md:left-[9.5rem] left-[3.5rem]'></div>
      <button className='bg-[#0e173c] rounded-lg border-transparent absolute bottom-[6rem] lg:bottom-[9rem] box-border h-fit w-fit p-4 border-4 l-calc cursor-pointer shadow-[0px_0px_41px_4px_#000812] text-white z-[4]'>
        Explore Shares Now
      </button>
    </div>
  );
}

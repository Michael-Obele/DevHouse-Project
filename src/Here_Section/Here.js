import React from 'react';
import { ReactComponent as Image } from './image.svg';
import fade from './hereAnimation.module.css';

export function Here({}) {
  return (
    <section className='bg-light bg-[#1ed760] pb-[50vh] h-screen lg:h-[130vh] body relative w-full md:w-auto'>
      <Image
        className={`${fade.fadeIn} w-[calc(28vw+(30-28)*((100vw-300px)/(1600-300)))] absolute top-0 right-10 z-[4]`}
      />
      <div className='absolute top-[5rem] lg:top-60 left-5 lg:left-40'>
        <h1 className='h1-calc font-[700] leading-[87.42px] text-[#2941ab]'>
          Listening isn't
        </h1>
        <h1 className='h1-calc font-[700] leading-[87.42px] text-[#2941ab] m-4 ml-20'>
          everything now
        </h1>
        <div className='bg-[#1ed760] rounded-l-3xl border-l-[5px] border-l-[#0e173c] border-r-0 border-y-0 box-border md:pt-3 lg:pt-0 h-24 w-1/2 pl-2.5  border-4'>
          <p className='text-justify font-normal p-calc h-fit w-fit leading-4 md:leading-5 lg:leading-8'>
            There is more, you can now buy shares of songs from spotify using
            our smarts contracts and that's all you will ever need to begin
          </p>
          <button className='bg-[#0e173c] rounded-lg border-transparent px-1 mt-[2rem]  xl:m-[7rem] lg:mt-[2.5rem] box-border h-fit w-fit lg:p-4 border-4 l-calc cursor-pointer shadow-[0px_0px_41px_4px_#000812] text-white z-[2]'>
            Explore Shares Now
          </button>
        </div>
      </div>
    </section>
  );
}

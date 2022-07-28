import React, { useState, useEffect } from 'react';
import { ReactComponent as Image } from './image.svg';
import fade from './hereAnimation.module.css';
import '../btnLoading.css';

export function Hero({ show }) {
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 4500));
  }; // Simulate a network request.
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const Load = () => setLoading(true);
  return (
    <section
      id='Home'
      className={
        show === 'hidden'
          ? 'bg-hero bg-[#1ed760] pb-[8vh] sm:h-screen relative w-full lg:w-auto box-border'
          : 'bg-hero bg-hero bg-[#1ed760] pb-[8vh] sm:h-screen relative w-full lg:w-auto box-border mt-[35vh] overflow-y-clip'
      }>
      <div className='flex flex-col justify-center items-center pt-[8%] lg:block lg:absolute lg:top-[5rem] left-5 lg:left-[3.467vw]'>
        <span className='mb-[6.667vw]'>
          <h1 className='text-[40px] md:text-[64px] font-[700] text-[#2941ab]'>
            Listening isn't
          </h1>
          <h1 className='text-[40px] md:text-[64px] font-[700] text-[#2941ab] lg:m-4 lg:ml-[7.3rem]'>
            everything now
          </h1>
        </span>
        <div className='bg-[#1ed760] rounded-l-[4px] rounded-r-[4px] border-x-[2px] border-l-[#0e173c] border-r-[#0e173c] mb-[40px] lg:mb-0 lg:border-r-0 border-y-0 box-border h-fit w-[75vw] md:w-[524px] border-4 flex flex-col lg:relative lg:left-[125px]'>
          <p className='md:text-justify font-[500] lg:font-[400] text-center text-[12px] md:text-[16px] md:px-1 lg:pl-[16px] lg:leading-5 h-[44px]'>
            There is more, you can now buy shares of songs from spotify using
            our smarts contracts and that's all you will ever need to begin
          </p>
        </div>

        <Image
          className={`${fade.fadeIn} w-[135.84px] h-[256px] mb-[9.333vw] lg:w-[364px] lg:h-[686px] lg:relative lg:bottom-[420px] lg:left-[61vw] xl:left-[52vw] z-[4]`}
        />
        {isLoading ? (
          <button className='bg-[#000812] font-bold rounded-[8px] border-transparent px-[2rem] py-[1rem] box-border h-fit w-fit relative lg:left-[260px] lg:bottom-[690px] border-4 text-white z-[2] transition-all hover:scale-110 buttonLoader'>
            <span className='z-[2]'>Exploring Shares Now</span>
          </button>
        ) : (
          <button
            onClick={Load}
            className='bg-[#000812] font-bold rounded-[8px] border-transparent px-[2rem] py-[1rem] box-border h-fit w-fit relative lg:left-[260px] lg:bottom-[690px] border-4 text-white z-[2] transition-all hover:scale-110'>
            Explore Shares Now
          </button>
        )}
      </div>
    </section>
  );
}

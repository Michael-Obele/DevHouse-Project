import React, { useState, useEffect } from 'react';
import { ReactComponent as Image } from './image.svg';
import fade from './hereAnimation.module.css';
import '../btnLoading.css';

export function Hero() {
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
      className='bg-hero bg-[#1ed760] pb-[50vh] h-screen lg:h-[130vh] body relative w-full lg:w-auto'>
      <div className='flex flex-col justify-center items-center pt-[80px] lg:block lg:absolute lg:top-[5rem] left-5 lg:left-40'>
        <h1 className='h1-calc font-[700] leading-[87.42px] text-[#2941ab]'>
          Listening isn't
        </h1>
        <h1 className='h1-calc font-[700] lg:leading-[87.42px] text-[#2941ab] lg:m-4 lg:ml-20'>
          everything now
        </h1>
        <div className='bg-[#1ed760]  rounded-l-[4px] rounded-r-[4px] border-x-[2px] border-l-[#0e173c] border-r-[#0e173c] lg:border-r-0 border-y-0 box-border lg:pt-0 h-24 w-1/2 px-2.5  border-4'>
          <p className='md:text-justify font-[500] text-center lg:p-calc h-fit w-fit leading-4 lg:leading-5'>
            There is more, you can now buy shares of songs from spotify using
            our smarts contracts and that's all you will ever need to begin
          </p>
        </div>

        <Image
          className={`${fade.fadeIn} w-[135.84px] h-[256px] lg:w-[364px] lg:h-[686px] lg:absolute lg:top-0 lg:right-10 z-[4]`}
        />
        {isLoading ? (
          <button className='bg-[#000812] rounded-[8px] border-transparent px-[2rem] py-[1rem] mt-[5rem]  xl:m-[7rem] lg:mt-[2.9rem] box-border h-fit w-fit border-4 cursor-pointer text-white z-[2] transition-all hover:scale-110 buttonLoader'>
            <span className='z-[2]'>Exploring Shares Now</span>
          </button>
        ) : (
          <button
            onClick={Load}
            className='bg-[#000812] rounded-[8px] border-transparent px-[2rem] py-[1rem] mt-[5rem]  xl:m-[7rem] lg:mt-[2.9rem] box-border h-fit w-fit border-4 cursor-pointer text-white z-[2] transition-all hover:scale-110'>
            Explore Shares Now
          </button>
        )}
      </div>
    </section>
  );
}

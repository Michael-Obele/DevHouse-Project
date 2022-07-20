import { StockNav } from './StockNav';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurStockText } from './OurStockText';
import Fela from '../Images/Fela.png';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import style from './index.module.css';

export function OurStocks() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section className='bg-[#000812] relative pb-[30rem]'>
      {/* Typed Character */}
      <OurStockText />
      {/* Typed Character */}
      <StockNav />
      <section ref={ref} className=' pb-[10rem] flex flex-row justify-center'>
        <div className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[32px] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center'>
          <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
            <img src={Fela} alt='Fela Kuti' />
          </div>
          <div className='py-[1.5rem] flex flex-col justify-between'>
            <p className='text-center leading-[28px] text-white text-[1.25em]'>
              Fela Kuti
            </p>
            <p className='text-center text-gray-300 text-[0.9em]'>
              Sorrow, Tears and Blood
            </p>
          </div>
          <div className='w-full mx-auto'>
            <input
              type='range'
              min='1'
              max='100'
              value='71'
              className={style.slider}
              id='myRange'></input>
            <span className='text-white flex justify-end text-[0.625rem]'>
              max
            </span>
          </div>
          <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              $2,453
            </p>
            <span className=' bg-green-700 rounded-[8px] px-2 h-[24px] flex items-center'>
              <p
                className={
                  inView
                    ? 'text-white mx-2 h-[18px] flex items-center font-[400] text-[1rem] border-r-2 line-1 anim-typewriter-unit'
                    : 'text-white mx-auto h-[1rem] flex font-[400] text-[1rem] my-[1px] border-r-2 anim-blink'
                }>
                71
              </p>
            </span>
          </div>
          <span className='flex justify-center mt-[2.5rem]'>
            <button className='w-[11rem] h-[2.4rem] bg-white  px-6 flex flex-row items-center text-black rounded-[8px]'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      </section>
      <div className='container flex flex-row items-center justify-center'>
        <span className='border-b-2 mx-2 px-[38vw] border-green-700'> {}</span>
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

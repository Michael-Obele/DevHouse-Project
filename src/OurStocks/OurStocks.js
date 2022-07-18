import { StockNav } from './StockNav';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { OurStockText } from './OurStockText';
import Fela from '../Images/Fela.png';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import style from './index.module.css';

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
      <div className=' pb-[10rem] flex flex-row justify-center'>
        <div className='py-[2rem] px-[4rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[32px] border-2 border-b-0 border-green-700 h-fit w-fit'>
          <div className='container flex justify-center items-center mx-auto'>
            <img src={Fela} alt='Fela Kuti' />
          </div>
          <p className='text-center mt-5 text-white text-[1.25em]'>Fela Kuti</p>
          <p className='text-center text-gray-300 text-[0.9em]'>
            Sorrow, Tears and Blood
          </p>
          <div className='container flex mx-auto py-4'>
            <input
              type='range'
              min='1'
              max='100'
              value='71'
              className={style.slider}
              id='myRange'></input>
          </div>
          <div className='container flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              $2,453
            </p>
            <span className='text-white mx-2 bg-green-700 rounded px-2 text-center font-[400] text-[1rem]'>
              71%
            </span>
          </div>
          <span className='flex justify-center'>
            <button className='bg-white m-2 px-6 py-2 flex flex-row items-center text-black rounded-md'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      </div>
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

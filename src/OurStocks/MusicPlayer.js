import React from 'react';
import { MusicList } from './MusicPlayerList';
import { useInView } from 'react-intersection-observer';
import { BsFillCartCheckFill } from 'react-icons/bs';
import style from './index.module.css';

export function MusicPlayer() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section
      ref={ref}
      className='pb-[7rem] mt-[2rem] flex flex-col items-center lg:flex-row lg:justify-evenly'>
      {
        <div
          key={MusicList[0].id}
          className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[32px] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center lg:hidden'>
          <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
            <img src={MusicList[0].image} alt={MusicList[0].artist} />
          </div>
          <div className='py-[1.563rem] flex flex-col justify-between'>
            <p className='text-center leading-[28px] text-white text-[1.25em]'>
              {MusicList[0].artist}
            </p>
            <p className='text-center text-gray-300 text-[0.9em]'>
              {MusicList[0].name}
            </p>
          </div>
          <div className='w-full mx-auto'>
            <input
              type='range'
              min='1'
              max='100'
              value={MusicList[0].progress}
              className={style.slider}
              id='myRange'
              readOnly></input>
            <span className='text-white flex justify-end text-[0.625rem]'>
              max
            </span>
          </div>
          <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              {MusicList[0].price} USD
            </p>
            <span className=' bg-green-700 rounded-[8px] px-2 h-[24px] flex items-center'>
              <p
                className={
                  inView
                    ? 'text-white mx-2 h-[18px] flex items-center font-[400] text-[1rem] border-r-2 line-1 anim-typewriter-unit'
                    : 'text-white mx-auto h-[1rem] flex font-[400] text-[1rem] my-[1px] border-r-2 anim-blink'
                }>
                {MusicList[0].progress}
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
      }
      {MusicList.map((music) => (
        <div
          key={music.id}
          className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[32px] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center hidden lg:block'>
          <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
            <img src={music.image} alt={music.artist} />
          </div>
          <div className='py-[1.563rem] flex flex-col justify-between'>
            <p className='text-center leading-[28px] text-white text-[1.25em]'>
              {music.artist}
            </p>
            <p className='text-center text-gray-300 text-[0.9em]'>
              {music.name}
            </p>
          </div>
          <div className='w-full mx-auto'>
            <input
              type='range'
              min='1'
              max='100'
              value={music.progress}
              className={style.slider}
              id='myRange'
              readOnly></input>
            <span className='text-white flex justify-end text-[0.625rem]'>
              max
            </span>
          </div>
          <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              {music.price} USD
            </p>
            <span className=' bg-green-700 rounded-[8px] px-2 h-[24px] flex items-center'>
              <p
                className={
                  inView
                    ? 'text-white mx-2 h-[18px] flex items-center font-[400] text-[1rem] border-r-2 line-1 anim-typewriter-unit'
                    : 'text-white mx-auto h-[1rem] flex font-[400] text-[1rem] my-[1px] border-r-2 anim-blink'
                }>
                {music.progress}
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
      ))}
    </section>
  );
}

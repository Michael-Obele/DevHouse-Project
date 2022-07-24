import React, { useState, useReducer, useEffect } from 'react';
import { MusicList } from './MusicPlayerList';
import { useInView } from 'react-intersection-observer';
import { BsFillCartCheckFill } from 'react-icons/bs';
import style from './index.module.css';

export function MusicPlayer() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ChangeProgress':
        return { ...state, [action.name]: action.value };
    }
  };
  const InitialState = {
    Fela: '71',
    Burna: '86',
    Falz: '55',
    Nasty: '45',
  };
  const [value, dispatch] = useReducer(reducer, InitialState);
  return (
    <section
      ref={ref}
      className='pb-[3.5rem] mt-[2rem] flex flex-col items-center lg:flex-row lg:justify-evenly'>
      {/* Small Screen Single Column */}
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
              min='0'
              max='100'
              onChange={(e) =>
                dispatch({
                  type: 'ChangeProgress',
                  name: `${MusicList[0].artist.split(' ')[0]}`,
                  value: e.target.value,
                })
              }
              defaultValue={value[MusicList[0].artist.split(' ')[0]]}
              className={style.slider}
              id='myRange'></input>
            <span className='text-white flex justify-end text-[0.625rem]'>
              max
            </span>
          </div>
          <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              {MusicList[0].price} USD
            </p>
            <span className=' bg-green-700 rounded-[8px] px-2 h-[24px] flex items-center'>
              <p className='text-white mx-2 h-[1rem] flex items-center font-[400] text-[1rem] border-r-2 line-1 blink'>
                {value[MusicList[0].artist.split(' ')[0]]}
              </p>
            </span>
          </div>
          <span className='flex justify-center mt-[2.5rem]'>
            <button className='w-[11rem] h-[2.4rem] bg-white  px-6 flex flex-row items-center text-black rounded-[8px] transition-all hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      }

      {/* Big screens Multiple Columns */}
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
              name='duration'
              min='0'
              max='100'
              onChange={(e) =>
                dispatch({
                  type: 'ChangeProgress',
                  name: `${music.artist.split(' ')[0]}`,
                  value: e.target.value,
                })
              }
              className={style.slider}
              defaultValue={value[music.artist.split(' ')[0]]}
              id='myRange'
            />
            <span className='text-white flex justify-end text-[0.625rem]'>
              max
            </span>
          </div>
          <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
            <p className='text-white text-center font-[400] text-[1rem] mx-2'>
              {music.price} USD
            </p>
            <span className=' bg-green-700 rounded-[8px] px-2 h-[24px] flex items-center'>
              {value[`${music.artist.split(' ')[0]}`] === 71 ? (
                <p className='text-white mx-1 h-[1rem] flex items-center font-[400] text-[1rem] border-r-2 line-1 blink'>
                  {value[music.artist.split(' ')[0]]}
                </p>
              ) : (
                <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.4375rem] text-[1rem] border-r-2 line-1 blink'>
                  {value[music.artist.split(' ')[0]]}
                </p>
              )}
            </span>
          </div>
          <span className='flex justify-center mt-[2.5rem]'>
            <button className='w-[11rem] h-[2.4rem] bg-white  px-6 flex flex-row items-center text-black rounded-[8px] transition-all hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      ))}
    </section>
  );
}

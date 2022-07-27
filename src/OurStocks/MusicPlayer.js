import React, { useState, useReducer, useEffect } from 'react';
import { MusicList } from './MusicPlayerList';
import { BsFillCartCheckFill } from 'react-icons/bs';
import style from './index.module.css';

export function MusicPlayer() {
  // Loading state for the Buy button.
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 1500));
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
  // End of Loading state for the Buy button.

  // State for the Music Player.
  // Last minute Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ChangeProgress':
        return { ...state, [action.name]: action.value };
      default:
        return state;
    }
  };
  const InitialState = {
    Fela: '71',
    Burna: '86',
    Falz: '55',
    Nasty: '45',
  };
  const [value, dispatch] = useReducer(reducer, InitialState);
  // End of Reducer function
  // End of State for the Music Player.

  return (
    <section className='pb-[3.5rem] mt-[2rem] flex flex-col items-center lg:flex-row lg:justify-evenly'>
      {/* Small Screen (Mobile) Single Column */}
      {
        <div
          key={MusicList[0].id}
          className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[2rem] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center lg:hidden'>
          <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
            <img src={MusicList[0].image} alt={MusicList[0].artist} />
          </div>
          <div className='py-[1.563rem] flex flex-col justify-between'>
            <p className='text-center leading-[1.75rem] text-white text-[1.25em]'>
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
              $
              {(
                Number(MusicList[0].price) +
                parseInt(value[MusicList[0].artist.split(' ')[0]])
              ).toLocaleString()}{' '}
              USD
            </p>
            <span
              className={`bg-green-700 rounded-[0.5rem] px-2 h-[1.5rem] flex items-center`}>
              {value[`${MusicList[0].artist.split(' ')[0]}`] === '100' ? (
                <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.7rem] text-[1rem] border-r-2 line-1 blink'>
                  {value[MusicList[0].artist.split(' ')[0]]}
                </p>
              ) : (
                <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.4375rem] text-[1rem] border-r-2 line-1 blink'>
                  {value[MusicList[0].artist.split(' ')[0]]}
                </p>
              )}
            </span>
          </div>
          <span className='flex px-[24.5px] mt-[2.5rem]'>
            <button
              onClick={Load}
              className='w-[11rem] mx-auto h-[2.4rem] bg-white justify-center flex flex-row items-center text-black rounded-[0.5rem] transition-all hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      }

      {/* Big screens (md and lg) Multiple Columns */}
      {MusicList.map((music) => (
        <div
          key={music.id}
          className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[2rem] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center hidden lg:block'>
          <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
            <img src={music.image} alt={music.artist} />
          </div>
          <div className='py-[1.563rem] flex flex-col justify-between'>
            <p className='text-center leading-[1.75rem] text-white text-[1.25em]'>
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
              min='1'
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
              $
              {(
                Number(music.price) +
                parseInt(value[music.artist.split(' ')[0]])
              ).toLocaleString()}{' '}
              USD
            </p>
            <span
              className={`bg-green-700 rounded-[0.5rem] px-2 h-[1.5rem] flex items-center`}>
              {value[`${music.artist.split(' ')[0]}`] === '100' ? (
                <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.7rem] text-[1rem] border-r-2 line-1 blink'>
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
            <button
              onClick={Load}
              className='w-[11rem] mx-auto h-[2.4rem] bg-white justify-center flex flex-row items-center text-black rounded-[0.5rem] transition-all hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      ))}
    </section>
  );
}

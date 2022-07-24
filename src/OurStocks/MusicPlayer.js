import React, { useState, useReducer, useEffect } from 'react';
import { MusicList } from './MusicPlayerList';
import { useInView } from 'react-intersection-observer';
import { BsFillCartCheckFill } from 'react-icons/bs';
import style from './index.module.css';
import shake from './stocksAnimation.module.css';

export function MusicPlayer() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
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
  // Last minute Reducer function
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
  // End of Reducer function
  return (
    <section
      ref={ref}
      className='pb-[3.5rem] mt-[2rem] flex flex-col items-center lg:flex-row lg:justify-evenly'>
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
            <span className=' bg-green-700 rounded-[0.5rem] px-2 h-[1.5rem] flex items-center'>
              <p className='text-white mx-2 h-[1rem] flex items-center font-[400] text-[1rem] border-r-2 line-1 blink'>
                {value[MusicList[0].artist.split(' ')[0]]}
              </p>
            </span>
          </div>
          <span className='flex px-[24.5px] mt-[2.5rem]'>
            <button
              onClick={Load}
              className='w-[11rem] h-[2.4rem] bg-white  px-6 flex flex-row items-center text-black rounded-[0.5rem] transition-all hover:scale-110'>
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
              {value[`${music.artist.split(' ')[0]}`] == 100 ? (
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
              className='w-[11rem] h-[2.4rem] bg-white  px-6 flex flex-row items-center text-black rounded-[0.5rem] transition-all hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          </span>
        </div>
      ))}
      {/* Modal */}
      <div
        id='crypto-modal'
        tabindex='-1'
        aria-hidden='true'
        class=' mx-auto hidden overflow-y-auto overflow-x-hidden fixed top-[50%] right-[50%] z-50 w-full md:inset-0 h-modal md:h-full'>
        <div class='relative p-4 w-full max-w-md h-full md:h-auto'>
          {/* <!-- Modal content --> */}
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              type='button'
              class='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-toggle='crypto-modal'>
              <svg
                aria-hidden='true'
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'></path>
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>
            {/* <!-- Modal header --> */}
            <div class='py-4 px-6 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-base font-semibold text-gray-900 lg:text-xl dark:text-white'>
                Connect wallet
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div class='p-6'>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                Connect with one of our available wallet providers or create a
                new one.
              </p>
              <ul class='my-4 space-y-3'>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                    <span class='flex-1 ml-3 whitespace-nowrap'>MetaMask</span>
                    <span class='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'>
                      Popular
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                    <span class='flex-1 ml-3 whitespace-nowrap'>
                      Coinbase Wallet
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                    <span class='flex-1 ml-3 whitespace-nowrap'>
                      Opera Wallet
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                    <span class='flex-1 ml-3 whitespace-nowrap'>
                      WalletConnect
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                    <span class='flex-1 ml-3 whitespace-nowrap'>Fortmatic</span>
                  </a>
                </li>
              </ul>
              <div>
                <a
                  href='#'
                  class='inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400'>
                  Why do I need to connect with my wallet?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

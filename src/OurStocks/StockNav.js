import React from 'react';
import { useInView } from 'react-intersection-observer';
import fade from './stocksAnimation.module.css';
import index from './index.module.css';
import { BsSearch } from 'react-icons/bs';

export function StockNav() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const musicList = [
    'Reggae',
    'Blues',
    'Jazz',
    'Rock',
    'R&B',
    'Dance',
    'Electronic',
    'Mushup',
    'Afropop',
    'Rap',
  ];
  return (
    <nav
      ref={ref}
      className='bg-transparent border-gray-400 py-2.5 dark:bg-gray-800 container'>
      <div className='container justify-center flex flex-wrap items-center mx-auto'>
        <ul
          className={
            inView
              ? `${fade.fadeIn} flex flex-row px-[6rem] text-[1rem] font-bold mt-4 lg:space-x-8 md:mt-0`
              : 'opacity-0 flex  px-[6rem] text-[1rem] font-bold mt-4 flex-row md:space-x-8 md:mt-0 '
          }>
          <li>
            <a
              href='#'
              className='text-white block py-auto pb-2 px-3 border-b-2 border-green-700 md:bg-transparent md:hover:text-green-700'
              aria-current='true'>
              <span className='mx-2'>Afrobeat</span>
            </a>
          </li>
          <button className='ml-[4rem] rounded-[8px] rounded-r-none px-4 bg-[#B0B7C0] text-[#0B4B22] lg:hidden'>
            <BsSearch size={20} />
          </button>
          <input
            list='genre'
            className={`${index.input} search rounded-[8px] rounded-l-none bg-[#B0B7C0] text-[#0B4B22] lg:hidden`}
            placeholder='Search Genre'
          />
          <datalist id='genre'>
            {musicList.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          {/* Other Genre for Larger Screens */}
          {musicList.map((item, index) => (
            <li className='hidden lg:block' key={item}>
              <a
                key={index + '_' + item}
                href='#'
                className='mx-[0.7rem]  text-[#BFBFBF] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-400 md:dark:hover:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-green-700'>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import React from 'react';
import { useInView } from 'react-intersection-observer';
import fade from './stocksAnimation.module.css';

export function StockNav({}) {
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
    'Hip Hop',
  ];
  return (
    <nav
      ref={ref}
      className='bg-transparent border-gray-400 px-auto sm:px-4 py-2.5 dark:bg-gray-800 w-screen'>
      <div className='container flex flex-wrap items-center  justify-center m-auto'>
        <div>
          <ul
            className={
              inView
                ? `${fade.fadeIn} flex flex-col text-[1rem] font-bold mt-4 md:flex-row md:space-x-8 md:mt-0`
                : 'flex flex-col text-[1rem] font-bold mt-4 md:flex-row md:space-x-8 md:mt-0 '
            }>
            <li>
              <a
                href='#'
                className='block py-auto pb-2 px-3 text-gray-700 border-b-2 border-green-700 md:bg-transparent md:hover:text-green-700'
                aria-current='true'>
                <span className='mx-2'>Afrobeat</span>
              </a>
            </li>
            {musicList.map((item, index) => (
              <li key={item}>
                <a
                  key={index + '_' + item}
                  href='#'
                  className='block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-400 md:dark:hover:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-green-700'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

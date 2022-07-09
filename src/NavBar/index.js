import React from 'react';
import logo from './logo.png';
import { CgDarkMode } from 'react-icons/cg';

export function NavBar({ darkMood, setDarkMood }) {
  const navList = ['Learn more', 'Team', 'Contact us'];
  const switchMood = () => {
    darkMood ? setDarkMood(false) : setDarkMood(true);
  };
  return (
    <div className={darkMood ? 'dark' : ''}>
      <nav className='bg-white border-gray-400 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
        <div className='container flex flex-wrap items-center  justify-between  mx-auto'>
          <div className='flex space-x-4'>
            <a href='#' className='flex items-center'>
              <img src={logo} className='mr-3 h-6 sm:h-9' alt='SpotXLogo' />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                SpotX
              </span>
            </a>
          </div>
          <div>
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white bg-green-400 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white'
                  aria-current='page'>
                  Home
                </a>
              </li>
              {navList.map((item) => (
                <li key={item}>
                  <a
                    key={item.id + '_' + item}
                    href='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CgDarkMode
              className='cursor-pointer dark:text-green-300'
              onClick={() => switchMood()}
              size={30}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

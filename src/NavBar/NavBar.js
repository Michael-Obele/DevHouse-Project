import React, { useState } from 'react';
import logo from './logo.png';
import animate from './animation.module.css';
import index from './index.module.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function NavBar({ darkMood, setDarkMood }) {
  const navList = ['Learn more', 'Team', 'Contact us'];
  const [show, setShow] = useState('hidden');
  const switchMood = () => {
    darkMood ? setDarkMood(false) : setDarkMood(true);
  };

  const toggleDarkMode = (checked) => {
    setDarkMood(checked);
  };
  return (
    <div className={darkMood ? 'dark' : ''}>
      <nav className='bg-white border-gray-400 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
        <div className='container md:flex md:flex-wrap67 items-center  justify-between  mx-auto'>
          <div className='flex space-x-4'>
            <a href='#' className='flex items-center'>
              <img src={logo} className='mr-3 h-6 sm:h-9' alt='SpotXLogo' />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                SpotX
              </span>
            </a>
          </div>
          {/* Humbugger */}
          <div className='hamburger-menu md:hidden'>
            <input
              onClick={() =>
                show === 'hidden' ? setShow('block') : setShow('hidden')
              }
              id={index.menuToggle}
              type='checkbox'
            />
            <label className={index.menuBtn} for={index.menuToggle}>
              <span></span>
            </label>
          </div>
          {/* Humbugger */}
          <div className={`${animate.slideInTop} ${show} md:block`}>
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white bg-green-400 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white'
                  aria-current='page'>
                  Home
                </a>
              </li>
              {navList.map((item, index) => (
                <li key={item}>
                  <a
                    key={index + '_' + item}
                    href='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-400 md:dark:hover:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-green-700'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${animate.slideInTop} ${show} md:flex justify-x md:flex-row md:space-x-8`}>
            <button className='bg-[#000812] rounded-lg border-transparent box-border h-fit w-fit my-auto p-2 border-4 cursor-pointer text-white'>
              Connect Wallet
            </button>
            <DarkModeSwitch
              className='cursor-pointer ml-2 my-auto dark:text-green-300'
              onClick={() => switchMood()}
              checked={darkMood}
              onChange={toggleDarkMode}
              size={40}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

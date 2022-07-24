import React, { useState, useEffect } from 'react';
import logo from '../Images/logo.png';
import animate from './animation.module.css';
import index from './index.module.css';
import '../btnLoading.css';

export function NavBar() {
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 4500));
  }; // Simulate a network request.
  const [isLoading, setLoading] = useState(false);
  const navList = ['Learn more', 'Team', 'Contact us'];
  const [show, setShow] = useState('hidden');

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const Load = () => setLoading(true);

  return (
    <>
      <nav className='bg-white border-gray-400 px-2 sm:px-4 py-2.5 dark:bg-gray-800 transition-colors delay-[180ms]'>
        <div className='container md:flex md:flex-wrap67 items-center  justify-between  mx-auto'>
          <div className='flex space-x-[.5rem] transition-all hover:scale-110'>
            <a href='#' className='flex items-center'>
              <img src={logo} className='mr-3 h-6 sm:h-9' alt='SpotX Logo' />
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
            <label className={index.menuBtn} htmlFor={index.menuToggle}>
              <span></span>
            </label>
          </div>
          {/* Humbugger */}
          <div className={`${animate.slideInTop} ${show} md:block`}>
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#Home'
                  className='block py-2 pr-4 pl-3 text-white bg-green-400 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white transition-all hover:scale-110'
                  aria-current='page'>
                  Home
                </a>
              </li>
              {navList.map((item, index) => (
                <li key={item}>
                  <a
                    key={index + '_' + item}
                    href={`#${item.split(' ')[0]}`}
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-400 md:dark:hover:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-green-700 transition-all hover:scale-110'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${animate.slideInTop} ${show} mt-2 md:mt-0 space-y-2 md:flex justify-x md:flex-row md:space-x-8`}>
            {isLoading ? (
              <button
                className={`bg-[#000812] rounded-lg border-transparent box-border h-fit w-fit my-auto p-2 border-4 text-white transition-all hover:scale-110 buttonLoader`}>
                Connecting Wallet
              </button>
            ) : (
              <button
                onClick={Load}
                className={`bg-[#000812] rounded-lg border-transparent box-border h-fit w-fit my-auto p-2 border-4 cursor-pointer text-white transition-all hover:scale-110`}>
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

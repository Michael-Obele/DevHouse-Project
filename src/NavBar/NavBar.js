import React, { useState, useEffect } from 'react';
import logo from '../Images/logo.png';
import animate from './animation.module.css';
import index from './index.module.css';
import '../btnLoading.css';
import NavModal from './NavModal';

export function NavBar({ show, setShow }) {
  const [modal, setModal] = useState(false);
  const [randNo, setRandNo] = useState(Math.round(Math.random() * 1));
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 4500));
  }; // Simulate a network request.
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setRandNo(Math.round(Math.random() * 1));
        setModal(true);
      });
    }
  }, [isLoading]);

  const Load = () => setLoading(true);

  const navList = ['Learn more', 'Team', 'Contact us'];

  return (
    <>
      <nav className='bg-white border-gray-400 px-2 sm:px-4 py-2.5 transition-all delay-[180ms] h-[64px]'>
        <div className='container md:flex md:flex-wrap67 items-center  justify-between mx-auto'>
          <div className='w-[13.867vw] flex transition-all md:md:hover:scale-110'>
            <a href='#' className='flex items-center'>
              <img
                src={logo}
                className='h-6 sm:h-9 mr-[8px]'
                alt='SpotX Logo'
              />
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
                  className='block py-2 pr-4 pl-3 text-white bg-green-400 rounded md:bg-transparent md:text-green-700 md:p-0 transition-all md:md:hover:scale-110'
                  aria-current='page'>
                  Home
                </a>
              </li>
              {navList.map((item, index) => (
                <li key={item}>
                  <a
                    key={index + '_' + item}
                    href={`#${item.split(' ')[0]}`}
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:md:hover:scale-110'>
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
                className={`bg-[#000812] rounded-lg border-transparent box-border h-fit w-fit my-auto p-2 border-4 text-white transition-all md:hover:scale-110 buttonLoader`}>
                Connecting Wallet
              </button>
            ) : (
              <button
                onClick={Load}
                className={`bg-[#000812] rounded-lg border-transparent box-border h-fit w-fit my-auto p-2 border-4 cursor-pointer text-white transition-all md:hover:scale-110`}>
                Connect Wallet
              </button>
            )}
          </div>
        </div>
        <NavModal modal={modal} setModal={setModal} randNo={randNo} />
      </nav>
    </>
  );
}

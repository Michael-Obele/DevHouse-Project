import React from 'react';
import logo from '../Images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-footer bg-[#000812] text-white flex flex-col items-center space-y-[2rem] pt-[3.125rem] pb-[6.3125rem] px-[26.9375rem]'>
      <span className='flex flex-row space-x-[.5rem] transition-all hover:scale-110'>
        <img src={logo} className='mr-3 h-6 sm:h-9' alt='SpotX Logo' />
        <h4 className='font-[700] text-[1rem] leading-[1.3662rem] self-center'>
          Spot X
        </h4>
        <a href='#' className='flex items-center'></a>
      </span>
      <p className='text-center font-[400] text-[.6875rem] '>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.
      </p>
      <p className='leading-[.9394rem] text-[.6875rem] font-[600] cursor-pointer'>
        © 2022 Spot X | Powered by Spotify
      </p>
    </footer>
  );
};

export default Footer;

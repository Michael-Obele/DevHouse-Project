import React from 'react';
import logo from '../Images/logo.png';

const Footer = () => {
  return (
    <footer className=' bg-[#000812] text-white relative flex flex-col items-center space-y-[2rem] pt-[2.4881rem] md:pt-[2.5rem] lg:pt-[3.125rem] pb-[4rem] md:pb-[4.5rem] lg:pb-[6.3125rem] px-[2.1875rem] md:px-[8rem] lg:px-[26.9375rem]'>
      <span className='flex flex-row space-x-[.5rem] transition-all hover:scale-110'>
        <img
          src={logo}
          className='mr-3 h-[38px] w-[45px] sm:h-9'
          alt='SpotX Logo'
        />
        <h4 className='font-[700] text-[1rem] leading-[1.3662rem] self-center cursor-pointer'>
          Spot X
        </h4>
      </span>
      <p className='text-center font-[400] text-[.6875rem] md:leading-[1rem] '>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.
      </p>
      <p className='leading-[.9394rem] text-[.6875rem] font-[600] cursor-pointer'>
        © 2022 Spot X | Powered by Spotify
      </p>
      <div className='rounded-tl-[4rem] bg-[#1ED760] absolute bottom-0 right-0 h-[1.5rem] w-[9vw] md:h-[2rem] md:w-[20vw] lg:h-[3.125rem] lg:w-[41vw]'></div>
      <div className='rounded-tr-[4rem] bg-[#1ED760] absolute bottom-0 left-0 h-[1.5rem] w-[9vw] md:h-[2rem] md:w-[20vw] lg:h-[3.125rem] lg:w-[41vw]'></div>
    </footer>
  );
};

export default Footer;

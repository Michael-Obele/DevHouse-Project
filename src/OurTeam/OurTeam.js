import { TeamCards } from './TeamCards';
import React from 'react';
import { OurTeamText } from './OurTeamText';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function OurTeam() {
  return (
    <section id='Team' className='pb-[128px]'>
      <OurTeamText />
      <TeamCards />
      <div className='container mt-[64px] flex flex-row items-center justify-center md:hidden'>
        <span className='border-b-[.0625rem] ml-[4rem] mr-[2rem] pl-[65vw] lg:pl-[78vw] border-[#1ED760]'></span>
        <span className='flex flex-row items-center text-white cursor-pointer'>
          <p className='bg-transparent py-auto font-medium text-[1rem]'>
            Show More
          </p>
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </section>
  );
}

export default OurTeam;

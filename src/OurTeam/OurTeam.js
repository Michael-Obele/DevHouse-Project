import { TeamCards } from './TeamCards';
import React from 'react';
import { OurTeamText } from './OurTeamText';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function OurTeam() {
  return (
    <section id='Team' className='pb-[128px]'>
      <OurTeamText />
      <TeamCards />
      {/* See More Line */}
      <div className='w-[375px] mt-[64px] lg:container box-border flex flex-row items-center space-x-[6.4vw] lg:space-x-0 justify-center'>
        <span className='border-b-[.0625rem] lg:ml-[4rem] lg:mr-[2rem] pl-[12rem] md:pl-[65vw] lg:pl-[78vw] border-[#1ED760]'></span>
        <span className='flex flex-row items-center text-white cursor-pointer'>
          <p className='bg-transparent py-auto font-medium text-[1rem]'>
            See All
          </p>
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </section>
  );
}

export default OurTeam;

import React from 'react';
import { TeamList } from './OurTeamList';
import { HiArrowNarrowRight } from 'react-icons/hi';

export function TeamCards() {
  const mobileLimit = 3;
  const mobileArray = TeamList.slice(1, mobileLimit);
  return (
    <>
      {/* Tablet View */}
      <div className='flex lg:hidden flex-col md:flex-row space-y-[40px] md:space-y-0 md:space-x-[32px] items-center justify-center'>
        {mobileArray.map((team) => (
          <div className='w-[304px] h-[400px] rounded-t-[16px] relative transition-all hover:-translate-y-1 hover:scale-110'>
            <img
              src={team.image}
              alt={`Our ${team.position}, ${team.name}`}
              className=''
            />
            <div className='relative rounded-b-[16px] bottom-[100px] w-[304px] h-[100px]  bg-[#17A148] text-white'>
              <span className='flex flex-col items-start pl-[32px] pt-[32px]'>
                <h4 className='font-[700] text-[1rem] leading-[22px]  '>
                  {team.name}
                </h4>
                <p className='font-[400] text-[11px] leading-[15px] '>
                  Co-founder, {team.position}
                </p>
              </span>
              <span className='flex flex-row space-x-[4px] px-4 justify-end cursor-pointer hover:scale-105 transition-all '>
                <p className='leading-[15px] text-[11px] font-[700]  '>
                  Learn More
                </p>
                <HiArrowNarrowRight className='text-white' />
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Large Screen View */}
      <div className='lg:flex flex-row space-x-[32px] justify-center hidden '>
        {TeamList.map((team) => (
          <div className='w-[304px] h-[400px] rounded-t-[16px] relative transition-all hover:-translate-y-1 hover:scale-110'>
            <img
              src={team.image}
              alt={`Our ${team.position}, ${team.name}`}
              className=''
            />
            <div className='relative rounded-b-[16px] bottom-[100px] w-[304px] h-[100px]  bg-[#17A148] text-white'>
              <span className='flex flex-col items-start pl-[32px] pt-[32px]'>
                <h4 className='font-[700] text-[1rem] leading-[22px]  '>
                  {team.name}
                </h4>
                <p className='font-[400] text-[11px] leading-[15px] '>
                  Co-founder, {team.position}
                </p>
              </span>
              <span className='flex flex-row space-x-[4px] px-4 justify-end cursor-pointer hover:scale-105 transition-all '>
                <p className='leading-[15px] text-[11px] font-[700]  '>
                  Learn More
                </p>
                <HiArrowNarrowRight className='text-white' />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

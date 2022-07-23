import React from 'react';
import { OurCom } from './OurCommunityText';
import { ReactComponent as Discord } from '../SVG/Discord.svg';
import { ReactComponent as Telegram } from '../SVG/Telegram.svg';
import { ReactComponent as Twitter } from '../SVG/Twitter.svg';
import css from './animate.module.css';
import { useInView } from 'react-intersection-observer';

function OurCommunity() {
  const { ref, inView } = useInView({
    threshold: 1,
    // triggerOnce: true,
  });

  const communityList = [{ SVG: Discord }, { SVG: Telegram }, { SVG: Twitter }];
  return (
    <section id='Contact' className='flex flex-col'>
      <OurCom />
      <div
        ref={ref}
        className='pt-[4rem] px-[16rem] flex flex-row space-x-[5rem]'>
        {communityList.map((item, index) => (
          <div
            key={index}
            className='bg-[#B9F3CE] w-[16rem] h-[16rem] rounded-[1rem] items-center flex justify-center '>
            <item.SVG
              className={
                inView
                  ? `${css.swirlInFwd} cursor-pointer transition-all hover:w-[12rem] hover:h-[12rem]`
                  : 'opacity-0'
              }
            />
          </div>
        ))}
      </div>
      <span className='border-b-[8px] pt-[7rem] mb-4 px-[120px] border-[#1ED760]'></span>
    </section>
  );
}

export default OurCommunity;

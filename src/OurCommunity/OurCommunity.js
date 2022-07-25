import React from 'react';
import { OurCom } from './OurCommunityText';
import { ReactComponent as Discord } from '../SVG/Discord.svg';
import { ReactComponent as Telegram } from '../SVG/Telegram.svg';
import { ReactComponent as Twitter } from '../SVG/Twitter.svg';
import css from './animate.module.css';
import { useInView } from 'react-intersection-observer';

function OurCommunity() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const communityList = [{ SVG: Discord }, { SVG: Telegram }, { SVG: Twitter }];
  return (
    <section id='Contact' className='flex flex-col'>
      <OurCom />
      <div
        ref={ref}
        className='items-center mx-auto container justify-center space-y-[2.5rem] md:space-y-0 flex flex-col md:flex-row md:space-x-[5rem]'>
        {communityList.map((item, index) => (
          <div
            key={index}
            className='bg-[#B9F3CE] w-[18vw] h-[18vw] rounded-[1rem] items-center flex justify-center '>
            <item.SVG
              className={
                inView
                  ? `${css.swirlInFwd} cursor-pointer transition-all md:w-[12vw] md:h-[12vw]  w-[13vw] h-[13vw] hover:w-[13.5vw] hover:h-[13.5vw]`
                  : 'opacity-0'
              }
            />
          </div>
        ))}
      </div>
      <span className='border-b-[4px] pt-[7rem] mb-4 px-[120px] border-[#1ED760]'></span>
    </section>
  );
}

export default OurCommunity;

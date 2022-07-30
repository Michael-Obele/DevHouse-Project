import React from 'react';
import { InfoList } from './InfoList';
import { useInView } from 'react-intersection-observer';
import { OurMech } from './OurMechText';
import './slideAnimation.css';
import Info from './Info';

export function OurMechanism() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section
      id='Learn'
      ref={ref}
      className='relative pb-[10rem] md:pb-[20rem] lg:pb-[100rem]'>
      {/* Typed Character */}
      <OurMech />
      {/* Typed Character */}
      {/* List of Our Mechanisms  */}
      <>
        {InfoList.map((item, index) => (
          <Info
            key={index}
            divClassA={item.divClassA}
            divClassB={item.divClassB}
            image1={item.image1}
            h2={item.h2}
            p={item.p}
            image2={item.image2}
          />
        ))}
      </>
      {/* List of Our Mechanisms  */}
    </section>
  );
}

import { OurMechanism } from './OurMechanism/OurMechanism';
import { OurMech } from './OurMechanism/OurMechText';
import { Hero } from './Hero_Section/Hero';
import React, { useEffect, useState } from 'react';
import './index.css';
import './typingAnimation.css';
import { NavBar } from './NavBar/NavBar';
import { OurStocks } from './OurStocks/OurStocks';
import OurCommunity from './OurCommunity/OurCommunity';

function App() {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <Hero />
      <section className='bg-[#000812] bg-mech-com'>
        <OurStocks />
        <OurMechanism />
        <OurCommunity />
      </section>
    </>
  );
}

export default App;

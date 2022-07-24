import React from 'react';
import { OurMechanism } from './OurMechanism/OurMechanism';
import { Hero } from './Hero_Section/Hero';
import { NavBar } from './NavBar/NavBar';
import { OurStocks } from './OurStocks/OurStocks';
import OurCommunity from './OurCommunity/OurCommunity';
import OurTeam from './OurTeam/OurTeam';
import Footer from './Footer/Footer';
import './index.css';
import './typingAnimation.css';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <section className='bg-[#000812] bg-mech-com'>
        <OurStocks />
        <OurMechanism />
        <OurTeam />
        <OurCommunity />
      </section>
      <Footer />
    </>
  );
}

export default App;

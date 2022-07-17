import { OurMechanism } from './OurMechanism/OurMechanism';
import { OurMech } from './OurMechanism/OurMechText';
import { Here } from './Here_Section/Here';
import React, { useEffect, useState } from 'react';
import './index.css';
import './typingAnimation.css';
import { NavBar } from './NavBar/NavBar';
import { OurStocks } from './OurStocks/OurStocks';

function App() {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <Here />
      <OurStocks />
      <OurMechanism />
    </>
  );
}

export default App;

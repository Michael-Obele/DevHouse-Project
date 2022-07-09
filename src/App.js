import { NavBar } from './NavBar';
import logo from './logo.png';
import React, { useState } from 'react';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <>
      <NavBar darkMood={darkMood} logo={logo} />
      <div className='bg-green-600 h-screen body'>
        <h2>Body Starts However</h2>
      </div>
    </>
  );
}

export default App;

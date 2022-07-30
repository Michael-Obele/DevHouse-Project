import React, { useState, useEffect } from 'react';
import { MusicList } from './MusicPlayerList';
import Player from './Player';
import StockModal from './StockModal';

export function MusicPlayer() {
  const [randNo, setRandNo] = useState(Math.round(Math.random() * 1));
  const [modal, setModal] = useState(false);
  return (
    <>
      {/* Mobile and Tablet Screen */}
      <section className=' lg:hidden pb-[3.5rem] mt-[2rem] flex flex-row items-center lg:flex-row justify-evenly'>
        {MusicList.slice(0, 1).map((music) => (
          <Player
            key={music.progress}
            image={music.image}
            artist={music.artist}
            name={music.name}
            progress={music.progress}
            price={music.price}
            setRandNo={setRandNo}
            setModal={setModal}
          />
        ))}
        <div className='hidden md:block lg:hidden'>
          {MusicList.slice(1, 2).map((music) => (
            <Player
              key={music.progress}
              image={music.image}
              artist={music.artist}
              name={music.name}
              progress={music.progress}
              price={music.price}
              setRandNo={setRandNo}
              setModal={setModal}
            />
          ))}
        </div>
      </section>
      {/* Big screens (Laptop) Multiple Columns  */}
      <section className=' hidden pb-[3.5rem] mt-[2rem] lg:flex items-center lg:flex-row lg:justify-evenly'>
        {MusicList.map((music) => (
          <Player
            key={music.progress}
            image={music.image}
            artist={music.artist}
            name={music.name}
            progress={music.progress}
            price={music.price}
            setRandNo={setRandNo}
            setModal={setModal}
          />
        ))}
      </section>
      <StockModal modal={modal} setModal={setModal} randNo={randNo} />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import style from './index.module.css';

const Player = ({
  image,
  artist,
  name,
  progress,
  price,
  setRandNo,
  setModal,
}) => {
  // Loading state for the Buy button.
  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }; // Simulate a network request.
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setRandNo(Math.round(Math.random() * 1));
        setModal(true);
      });
    }
  }, [isLoading]);

  const Load = () => setLoading(true);
  // End of Loading state for the Buy button.
  const [value, setValue] = useState(progress);
  return (
    <>
      <div className='p-[2.5rem] w-[19rem] bg-gradient-to-b from-[#1F3180] to-[#1f318000] container rounded-[2rem] border-2 border-b-0 border-[#1ED760] h-[30.375rem] items-center'>
        <div className='w-[10.25rem] h-[10.56rem] items-center mx-auto'>
          <img src={image} alt={artist} />
        </div>
        <div className='py-[1.563rem] flex flex-col justify-between'>
          <p className='text-center leading-[1.75rem] text-white text-[1.25em]'>
            {artist}
          </p>
          <p className='text-center text-gray-300 text-[0.9em]'>{name}</p>
        </div>
        <div className='w-full mx-auto'>
          <input
            type='range'
            min='1'
            max='100'
            onChange={(e) => setValue(e.target.value)}
            defaultValue={progress}
            className={style.slider}
            id='myRange'></input>
          <span className='text-white flex justify-end text-[0.625rem]'>
            max
          </span>
        </div>
        <div className='container mt-[0.5rem] flex justify-center items-center mx-auto'>
          <p className='text-white text-center font-[400] text-[1rem] mx-2'>
            ${(Number(price) + parseInt(value)).toLocaleString()} USD
          </p>
          <span
            className={`bg-green-700 rounded-[0.5rem] px-2 h-[1.5rem] flex items-center`}>
            {value === '100' ? (
              <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.7rem] text-[1rem] border-r-2 line-1 blink'>
                {value}
              </p>
            ) : (
              <p className='text-white mx-1 h-[1rem] flex items-center font-[400] pr-[1.4375rem] text-[1rem] border-r-2 line-1 blink'>
                {value}
              </p>
            )}
          </span>
        </div>
        <span className='flex px-[24.5px] mt-[2.5rem]'>
          {!isLoading ? (
            <button
              onClick={Load}
              className='w-[11rem] mx-auto h-[2.4rem] bg-white justify-center flex flex-row items-center text-black rounded-[0.5rem] transition-all md:hover:scale-110'>
              <BsFillCartCheckFill className='mr-2 mb-1' />
              Buy Shares
            </button>
          ) : (
            <button
              role='status'
              className='flex flex-row w-[11rem] mx-auto h-[2.4rem] bg-white justify-center items-center text-black rounded-[0.5rem] cursor-wait transition-all md:hover:scale-110'>
              <svg
                aria-hidden='true'
                class='mr-2 w-4 h-4 text-gray-200 animate-spin fill-black'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span>Loading...</span>
            </button>
          )}
        </span>
      </div>
    </>
  );
};

export default Player;

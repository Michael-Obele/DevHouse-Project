import React from 'react';
import style from './Modal.module.css';
import { GoAlert, GoCheck } from 'react-icons/go';

const NavModal = ({ modal, setModal, randNo }) => {
  return (
    <>
      {randNo === 0 ? (
        <div className={modal ? style.modalShow : style.modal}>
          <div className={style.modalContent}>
            <a
              href='#'
              onClick={() => setModal(false)}
              className={`${style.modalClose} text-[25px]`}>
              &times;
            </a>
            <div className='flex flex-row space-x-3 items-center text-[24px] mt-5'>
              <GoAlert className=' text-red-700 ' />
              <h1 className=' font-bold'>Error</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-black bg-red-700 px-4 py-2 rounded-sm'>
                Try Again
              </button>
            </span>
          </div>
        </div>
      ) : (
        <div className={modal ? style.modalShow : style.modal}>
          <div className={style.modalContent}>
            <a
              href='#'
              onClick={() => setModal(false)}
              className={`${style.modalClose} text-[25px]`}>
              &times;
            </a>
            <div className='flex flex-row space-x-3 items-center text-[24px] mt-5'>
              <GoCheck className=' text-green-700 ' />
              <h1 className=' font-bold'>Connected</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-black bg-green-700 px-4 py-2 rounded-sm'>
                Done
              </button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default NavModal;

import React from 'react';
import style from './Modal.module.css';
import { GoAlert, GoCheck } from 'react-icons/go';

const StockModal = ({ modal, setModal, randNo }) => {
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
            <div className='flex flex-row space-x-3 text-center justify-center items-center text-[24px] mt-5'>
              <GoAlert size={25} className='font-bold text-red-600 ' />
              <h1 className=' font-bold'>Transaction Failed</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-[#000812] bg-red-600 px-4 py-2 rounded-sm'>
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
            <div className='flex flex-row space-x-3 text-center justify-center items-center text-[24px] mt-5'>
              <GoCheck className=' text-green-700 ' />
              <h1 className=' font-bold'>Transaction Success</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-[#000812] bg-green-700 px-4 py-2 rounded-sm'>
                Done
              </button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default StockModal;

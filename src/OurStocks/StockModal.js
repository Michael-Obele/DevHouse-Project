import React from 'react';
import style from './Modal.module.css';

const StockModal = ({ modal, setModal, randNo }) => {
  const alert = `<lord-icon
    src="https://cdn.lordicon.com/otyynlki.json"
    trigger="loop"
    delay="1000"
    style="width:30px;height:30px">
</lord-icon>`;
  const success = `<lord-icon
    src="https://cdn.lordicon.com/hjeefwhm.json"
    trigger="loop"
    delay="1000"
    style="width:30px;height:30px">
</lord-icon>`;
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
            <div className='flex flex-row space-x-3 text-xl mt-5'>
              <div dangerouslySetInnerHTML={{ __html: alert }} />
              <h1>Transaction Failed</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-black bg-red-700 px-2 rounded-sm'>
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
            <div className='flex flex-row space-x-3 text-xl mt-5'>
              <div dangerouslySetInnerHTML={{ __html: success }} />
              <h1>Transaction Success</h1>
            </div>
            <span className='flex justify-center mt-5'>
              <button
                onClick={() => setModal(false)}
                className='text-black bg-green-700 px-2 rounded-sm'>
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

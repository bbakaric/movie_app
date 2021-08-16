import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/action-creators';

const RouletteBtn = (): any => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(showModal(true));
        }}
      >
        Movie Roulette
      </button>
    </div>
  );
};

export default RouletteBtn;

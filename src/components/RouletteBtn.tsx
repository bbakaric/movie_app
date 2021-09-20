import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal, showMovieCard } from '../store/action-creators';

const RouletteBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn-roulette"
        onClick={() => {
          dispatch(showModal(true));
          dispatch(showMovieCard('none'));
        }}
      >
        Movie Roulette
      </button>
    </div>
  );
};

export default RouletteBtn;

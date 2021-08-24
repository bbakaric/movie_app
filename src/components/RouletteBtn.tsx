import React from 'react';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { showModal } from '../store/action-creators';
import RandomMovieDetails from '../views/RandomMovieDetails';

const RouletteBtn = (): any => {
  const show = useSelector(
    (state: RootStateOrAny) => state.modal.showRandomMovieDetails,
  );

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
      {show ? <RandomMovieDetails /> : null}
    </div>
  );
};

export default RouletteBtn;

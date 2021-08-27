import React from 'react';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { showRouletteModal } from '../store/action-creators';
import MovieDetails from '../views/MovieDetails';
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
          dispatch(showRouletteModal(true));
        }}
      >
        Movie Roulette
      </button>
      {show ? <MovieDetails /> : null}
    </div>
  );
};

export default RouletteBtn;

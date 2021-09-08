import React from 'react';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { showModal } from '../store/action-creators';
import MovieDetails from '../views/MovieDetails';

const RouletteBtn = (): JSX.Element => {
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
      {show ? <MovieDetails /> : null}
    </div>
  );
};

export default RouletteBtn;

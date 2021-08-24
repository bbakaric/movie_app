import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';
import RouletteBtn from '../components/RouletteBtn';
import MovieRouletteModal from './MovieRouletteModal';
import RandomMovieDetails from './RandomMovieDetails';

const Main = (): any => {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);
  const show = useSelector(
    (state: RootStateOrAny) => state.modal.showRandomMovieDetails,
  );

  return (
    <div>
      <MovieCard />
      <LoadBtn />
      <RouletteBtn />
      {modal ? <MovieRouletteModal /> : null}
    </div>
  );
};

export default Main;

import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';
import RouletteBtn from '../components/RouletteBtn';
import MovieRouletteModal from './MovieRouletteModal';
import RandomMovieDetails from '../components/RandomMovieDetails';

const Main = (): any => {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);
  const showDetails = useSelector(
    (state: RootStateOrAny) => state.modal.showDetails,
  );

  return (
    <div>
      <MovieCard />
      <LoadBtn />
      <RouletteBtn />
      {modal ? <MovieRouletteModal /> : null}
      {/* {showDetails ? <RandomMovieDetails /> : null} */}
    </div>
  );
};

export default Main;

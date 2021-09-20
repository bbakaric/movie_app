import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import RouletteModal from '../components/RouletteModal';
import MovieDetails from './MovieDetails';

const Main = (): JSX.Element => {
  const showDetails = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );

  const show = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <div>
      {showDetails ? <MovieDetails /> : <MovieCard />}
      {show && <RouletteModal />}
    </div>
  );
};

export default Main;

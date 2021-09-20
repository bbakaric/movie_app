import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import MovieDetails from './MovieDetails';

const Main = (): JSX.Element => {
  const showDetails = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );
  return <div>{showDetails ? <MovieDetails /> : <MovieCard />}</div>;
};

export default Main;

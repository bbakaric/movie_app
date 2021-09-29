import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';
import RouletteBtn from '../components/RouletteBtn';
import RouletteModal from '../components/RouletteModal';
import MovieDetails from './MovieDetails';

const Main = (): JSX.Element => {
  const showDetails = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );

  const display = useSelector(
    (state: RootStateOrAny) => state.modal.hideComponent,
  );

  const show = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <div>
      <MovieCard />
      <div className="btn-align" style={{ display: display }}>
        <LoadBtn />
        <RouletteBtn />
      </div>
      {showDetails && <MovieDetails />}
      {show && <RouletteModal />}
    </div>
  );
};

export default Main;

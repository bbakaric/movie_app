import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';
import RouletteBtn from '../components/RouletteBtn';
import MovieRouletteModal from './MovieRouletteModal';

const Main = (): JSX.Element => {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);

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

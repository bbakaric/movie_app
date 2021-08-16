import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';
import RouletteBtn from '../components/RouletteBtn';

const Main = (): any => {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <div>
      <MovieCard />
      <LoadBtn />
      <RouletteBtn />
      {modal ? console.log('roulette_modal_component') : null}
    </div>
  );
};

export default Main;

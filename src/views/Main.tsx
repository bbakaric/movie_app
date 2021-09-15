import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import LoadBtn from '../components/LoadBtn';

const Main = (): JSX.Element => {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <div>
      <MovieCard />
    </div>
  );
};

export default Main;

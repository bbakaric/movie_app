import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import RouletteBtn from '../components/RouletteBtn';
import RouletteModal from '../components/RouletteModal';

const MovieRouletteModal = (): JSX.Element => {
  const show = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <div>
      <RouletteBtn />
    </div>
  );
};

export default MovieRouletteModal;

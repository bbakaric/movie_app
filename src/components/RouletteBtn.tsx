import React from 'react';
import { useDispatch } from 'react-redux';
import {
  showModal,
  showMovieCard,
  hideComponent,
} from '../store/action-creators';

const RouletteBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn-roulette"
        onClick={() => {
          dispatch(showModal(true));
          dispatch(showMovieCard('none'));
          dispatch(hideComponent('none'));
        }}
      >
        <i className="fas fa-random roulette-icon"></i>
      </button>
    </div>
  );
};

export default RouletteBtn;

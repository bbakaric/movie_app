import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadMovies } from '../store/action-creators';

interface State {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadBtn = (): JSX.Element => {
  const [page, setPage] = useState<State['page']>(2);

  const handlePage = (): void => {
    setPage(page + 1);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          handlePage();
          dispatch(loadMovies(page));
        }}
      >
        LOAD
      </button>
    </div>
  );
};

export default LoadBtn;

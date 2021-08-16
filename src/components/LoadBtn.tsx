import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadMovies } from '../store/action-creators';

const LoadBtn = (): any => {
  const [page, setPage] = useState(2);

  const handlePage = () => {
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

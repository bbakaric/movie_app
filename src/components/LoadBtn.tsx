import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadMovies } from '../store/action-creators';

interface State {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  showBtn: string;
  setShowBtn: React.Dispatch<React.SetStateAction<string>>;
  showLoader: string;
  setShowLoader: React.Dispatch<React.SetStateAction<string>>;
}

const LoadBtn = (): JSX.Element => {
  const [page, setPage] = useState<State['page']>(2);

  const handlePage = (): void => {
    setPage(page + 1);
  };

  const dispatch = useDispatch();

  const loadIcon = () => {
    dispatch(loadMovies(page));
  };

  return (
    <button
      onClick={() => {
        handlePage();
        loadIcon();
      }}
      className="btn-load"
    >
      LOAD
    </button>
  );
};

export default LoadBtn;

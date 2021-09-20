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
  const [showBtn, setShowBtn] = useState<State['showBtn']>('block');
  const [showLoader, setShowLoader] = useState<State['showLoader']>('none');

  const handlePage = (): void => {
    setPage(page + 1);
  };

  const dispatch = useDispatch();

  const loadIcon = () => {
    setShowBtn('none');
    setShowLoader('block');
    setTimeout(() => {
      setShowLoader('none');
      dispatch(loadMovies(page));
    }, 200);
    setTimeout(() => {
      setShowBtn('block');
    }, 400);
  };

  return (
    <div className="btn-container">
      <button
        onClick={() => {
          handlePage();
          loadIcon();
        }}
        className="btn-load"
        style={{ display: `${showBtn}` }}
      >
        I want more movies !
      </button>
      <i className="fas fa-spinner" style={{ display: `${showLoader}` }}></i>
    </div>
  );
};

export default LoadBtn;

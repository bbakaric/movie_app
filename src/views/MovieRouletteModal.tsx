import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  showModal,
  loadGenres,
  getRandomMovieId,
  showDetails,
  showRandomMovieDetails,
  setGenreID,
} from '../store/action-creators';

const MovieRouletteModal = () => {
  const [genreId, setGenreId] = useState(0);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const genres = useSelector((state: RootStateOrAny) => state.modal.genres);

  console.log(genreId);

  const handlePage = () => {
    const page = Math.floor(Math.random() * 500) + 1;
    setPage(page);
  };

  const movieId = useSelector((state: RootStateOrAny) => state.modal.movieId);

  useEffect(() => {
    dispatch(loadGenres());
    handlePage();
  }, []);

  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.modal.randomMovieDetails,
  );

  const showDetail = useSelector(
    (state: RootStateOrAny) => state.modal.showDetails,
  );

  let render = null;

  if (movieDetails !== []) {
    render = movieDetails.map((movie) => (
      <div key={movie.id}>
        <p>{movie.original_title}</p>
      </div>
    ));
  }

  return (
    <div>
      <div>
        <h2>Movie Roulette</h2>
        {genres.map((genre) => (
          <div key={genre.id}>
            <input
              type="radio"
              name="genre_name"
              value={genre.id}
              onClick={() => {
                setGenreId(genre.id);
              }}
            />
            <label htmlFor="">{genre.name}</label>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch(showModal(false));
            dispatch(setGenreId(genreId));
            dispatch(getRandomMovieId(page, genreId));
            // dispatch(showRandomMovieDetails(movieId));
            dispatch(showDetails(true));
          }}
        >
          Roll
        </button>
      </div>
      <div>{showDetail ? render : null}</div>
    </div>
  );
};

export default MovieRouletteModal;

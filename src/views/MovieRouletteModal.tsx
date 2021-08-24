import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  showModal,
  loadGenres,
  getRandomMovieId,
  showMovieDetails,
  setGenreId,
  showMovieDetailsModal,
} from '../store/action-creators';

const MovieRouletteModal = () => {
  const dispatch = useDispatch();

  const genres = useSelector((state: RootStateOrAny) => state.modal.genres);

  const genreId = useSelector((state: RootStateOrAny) => state.modal.genreId);

  const movieId = useSelector((state: RootStateOrAny) => state.modal.movieId);

  const page = Math.floor(Math.random() * 500) + 1;

  useEffect(() => {
    dispatch(loadGenres());
  }, []);

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
              onChange={() => {
                dispatch(setGenreId(genre.id));
                dispatch(getRandomMovieId(page, genreId));
              }}
            />
            <label htmlFor="">{genre.name}</label>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch(showModal(false));
            dispatch(showMovieDetails(movieId));
            dispatch(showMovieDetailsModal(true));
          }}
        >
          Roll
        </button>
      </div>
    </div>
  );
};

export default MovieRouletteModal;

import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  showRouletteModal,
  loadGenres,
  showMovieDetails,
  getRandomMovie,
} from '../store/action-creators';

const MovieRouletteModal = () => {
  const dispatch = useDispatch();

  const genres = useSelector((state: RootStateOrAny) => state.modal.genres);

  const movieId = useSelector((state: RootStateOrAny) => state.modal.movieId);

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
                dispatch(getRandomMovie(genre.id));
              }}
            />
            <label htmlFor="">{genre.name}</label>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch(showRouletteModal(false));
            dispatch(showMovieDetails(movieId, true));
          }}
        >
          Roll
        </button>
      </div>
    </div>
  );
};

export default MovieRouletteModal;

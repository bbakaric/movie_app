import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  showModal,
  loadGenres,
  showMovieDetails,
  getRandomMovie,
} from '../store/action-creators';

interface State {
  id: number;
  name: string;
}

const MovieRouletteModal = (): JSX.Element => {
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
        {genres.map((genre: State) => (
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
            dispatch(showModal(false));
            dispatch(showMovieDetails(movieId, true, null));
          }}
        >
          Roll
        </button>
        <button
          onClick={() => {
            dispatch(showModal(false));
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieRouletteModal;

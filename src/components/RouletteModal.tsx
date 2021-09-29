import React, { useEffect, useState } from 'react';
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

const RouletteModal = (): JSX.Element => {
  const [checkedValue, setCheckedValue] = useState('Action');

  const genres = useSelector((state: RootStateOrAny) => state.modal.genres);

  const movieId = useSelector((state: RootStateOrAny) => state.modal.movieId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenres());
    dispatch(getRandomMovie(28));
  }, []);

  return (
    <div className="roulette">
      <h1>Movie Roulette</h1>
      <h3>Select genre:</h3>
      {genres.map((genre: State) => (
        <div key={genre.id} className="genres">
          <input
            type="radio"
            name="genre_name"
            value={genre.name}
            checked={checkedValue === genre.name}
            onChange={(e) => {
              setCheckedValue(e.target.value);
              dispatch(getRandomMovie(genre.id));
            }}
          />
          <label htmlFor="">{genre.name}</label>
        </div>
      ))}
      <button
        className="btn-roll"
        onClick={() => {
          dispatch(showModal(false));
          dispatch(showMovieDetails(movieId, true, null));
        }}
      >
        Roll
      </button>
    </div>
  );
};

export default RouletteModal;

import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { showModal } from '../store/action-creators';
import { loadGenres } from '../store/action-creators';

const MovieRouletteModal = () => {
  const genres = useSelector((state: RootStateOrAny) => state.modal.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  return (
    <div>
      <div>
        <h2>Movie Roulette</h2>
        {genres.map((genre) => (
          <div key={genre.id}>
            <input type="radio" name="genre_name" value={genre.id} />
            <label htmlFor="">{genre.name}</label>
          </div>
        ))}
        <button>Roll</button>
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

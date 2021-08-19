import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { showRandomMovieDetails } from '../store/action-creators';

const RandomMovieDetails = () => {
  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.modal.randomMovieDetails,
  );

  const posterUrl = useSelector(
    (state: RootStateOrAny) => state.movies.posterUrl,
  );

  const movieId = useSelector((state: RootStateOrAny) => state.modal.movieId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showRandomMovieDetails(movieId));
    console.log(movieId);
  }, []);

  return (
    <div>
      {movieDetails.map((movie) => (
        <div key={movie[0].id}>
          <h2>{movie[0].original_title}</h2>
          <img src={posterUrl + movie[0].backdrop_path} alt="backdroph" />
          <p>{movie[0].overview}</p>
          <h3>Rating</h3>
          <p>{movie[0].vote_average}</p>
          <h3>Popularity</h3>
          <p>{movie[0].popularity}</p>
          <h3>Language</h3>
          <p>{movie[0].original_language}</p>
          <h3>Production companies</h3>
          <p>{movie[0].production_companies}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomMovieDetails;

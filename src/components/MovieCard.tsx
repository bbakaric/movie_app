import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getMovies, showMovieDetails } from '../store/action-creators';
import MovieDetails from '../views/MovieDetails';

interface State {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieCard = (): JSX.Element => {
  const posterUrl: string = 'https://image.tmdb.org/t/p/w500';

  const movies = useSelector((state: RootStateOrAny) => state.movies.movies);

  const sessionId = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.sessionId,
  );

  const showDetails = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );

  const isLoggedIn = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.isLoggedIn,
  );

  const dispatch = useDispatch();

  const renderMovieDetails = (): JSX.Element => {
    return movies.map((movie: State) => {
      return (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
          <img src={posterUrl + movie.poster_path} alt="poster" />
          <p>Release: {parseInt(movie.release_date)}</p>
          <h3>Rating: {movie.vote_average}</h3>
          {isLoggedIn ? (
            <button
              onClick={() => {
                dispatch(showMovieDetails(movie.id, true, sessionId));
              }}
            >
              More Details...
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(showMovieDetails(movie.id, true, null));
              }}
            >
              More Details...
            </button>
          )}
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>{showDetails ? <MovieDetails /> : null}</div>
      {renderMovieDetails()}
    </div>
  );
};

export default MovieCard;

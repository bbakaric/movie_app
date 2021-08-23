import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  getMovies,
  showMovieDetails,
  showMovieDetailsModal,
} from '../store/action-creators';
import MovieDetails from '../views/MovieDetails';

const MovieCard = (): any => {
  const posterUrl: string = 'https://image.tmdb.org/t/p/w500';

  const movies = useSelector((state: RootStateOrAny) => state.movies.movies);
  const show = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );
  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.movies.movieDetails,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>{show ? <MovieDetails /> : null}</div>
      {movies.map((movie: any) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
          <img src={posterUrl + movie.poster_path} alt="poster" />
          <p>Release: {parseInt(movie.release_date)}</p>
          <h3>Rating: {movie.vote_average}</h3>
          <button
            onClick={() => {
              dispatch(showMovieDetails(movie.id));
              setTimeout(() => {
                dispatch(showMovieDetailsModal(true));
              }, 500);
            }}
          >
            More Details...
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

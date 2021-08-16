import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getMovies, getPoster } from '../store/action-creators';

const MovieCard = () => {
  const posterUrl: string = 'https://image.tmdb.org/t/p/w500';

  const movies = useSelector((state: RootStateOrAny) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
          <img src={posterUrl + movie.poster_path} alt="poster" />
          <p>Release: {movie.release_date}</p>
          <h3>Rating: {movie.vote_average}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

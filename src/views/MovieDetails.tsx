import React, { useState } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { clearMovieDetails, closeModal } from '../store/action-creators';

const MovieDetails = () => {
  const [ratingValue, setRatingValue] = useState('');

  const handleRatingValue = (e) => {
    setRatingValue(e.target.value);
  };

  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.movies.movieDetails,
  );

  const movieImages = useSelector(
    (state: RootStateOrAny) => state.movies.movieImages,
  );

  const posterUrl = useSelector(
    (state: RootStateOrAny) => state.movies.posterUrl,
  );

  const dispatch = useDispatch();

  const render = movieDetails.production_companies.map((company) => (
    <p key={company.id}>{company.name}</p>
  ));

  return (
    <div>
      <p>
        <b>{movieDetails.original_title}</b>
      </p>
      {movieImages.backdrops.length !== 0 && (
        <img src={posterUrl + movieDetails.backdrop_path} alt="backdroph" />
      )}
      {movieImages.backdrops.length === 0 &&
        movieImages.posters.length !== 0 && (
          <img
            src={posterUrl + movieImages.posters[0].file_path}
            alt="poster"
          />
        )}
      {movieImages.backdrops.length === 0 &&
        movieImages.posters.length === 0 && <p>Image currently unavailable!</p>}
      <p>{movieDetails.overview}</p>
      <p>Rate movie</p>
      <form action="">
        <select name="rating" id="rate">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <h3>Rating</h3>
      <p>{movieDetails.vote_average}</p>
      <h3>Popularity</h3>
      <p>{movieDetails.popularity}</p>
      <h3>Language</h3>
      <p>{movieDetails.original_language}</p>
      <h3>Production companies</h3>
      {movieDetails.production_companies.length === 0 ? <p>Unknown</p> : render}
      <button
        onClick={() => {
          dispatch(closeModal());
          dispatch(clearMovieDetails());
        }}
      >
        Close
      </button>
      <p>________________________________________________</p>
    </div>
  );
};

export default MovieDetails;

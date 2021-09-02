import React, { useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import {
  clearMovieDetails,
  closeModal,
  rateMovie,
  setRatingValue,
} from '../store/action-creators';

const MovieDetails = () => {
  const [ratingValue, setRatingVal] = useState(0);

  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.movies.movieDetails,
  );

  const movieImages = useSelector(
    (state: RootStateOrAny) => state.movies.movieImages,
  );

  const posterUrl = useSelector(
    (state: RootStateOrAny) => state.movies.posterUrl,
  );

  const sessionId = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.sessionId,
  );

  const rating = useSelector(
    (state: RootStateOrAny) => state.movies.movieRating,
  );

  const dispatch = useDispatch();

  const onChange = (ratingValue: number) => {
    console.log(
      `Rating for movie ${movieDetails.id} is ${ratingValue} and sessionId is ${sessionId}`,
    );
    dispatch(setRatingValue(ratingValue));
  };

  if (rating !== 0) {
    dispatch(rateMovie(movieDetails.id, rating, sessionId));
    console.log('Rating updated');
  }

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
      <ReactStarsRating
        onChange={onChange}
        value={ratingValue}
        count={10}
        starGap={5}
      />
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

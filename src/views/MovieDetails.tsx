import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import {
  clearMovieDetails,
  closeModal,
  getRatedMovies,
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

  const ratedMovies = useSelector(
    (state: RootStateOrAny) => state.movies.ratedMovies,
  );

  const dispatch = useDispatch();

  const ratingChange = (rating: number) => {
    dispatch(setRatingValue(rating));
  };

  if (rating !== 0) {
    dispatch(rateMovie(movieDetails.id, rating, sessionId));
  }

  const render = movieDetails.production_companies.map((company) => (
    <p key={company.id}>{company.name}</p>
  ));

  // const ratedMoviesId = ratedMovies.map((movie) => movie.id);

  // const myRating = null;

  // if (ratedMoviesId.includes(movieDetails.id)) {
  //   myRating =
  // }

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
      <ReactStars size={35} count={10} isHalf={true} onChange={ratingChange} />
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

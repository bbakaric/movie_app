import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import {
  clearMovieDetails,
  closeModal,
  rateMovie,
  setRatingValue,
  showMovieCard,
} from '../store/action-creators';

interface State {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  rating: number;
  backdrop_path: string;
  overview: string;
  popularity: number;
  original_language: string;
  production_companies: { id: number; name: string }[];
}

const MovieDetails = (): JSX.Element => {
  const movieDetails: State = useSelector(
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

  const isLoggedIn = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.isLoggedIn,
  );

  const rating = useSelector(
    (state: RootStateOrAny) => state.movies.movieRating,
  );

  console.log(rating);

  const ratedMovies = useSelector(
    (state: RootStateOrAny) => state.movies.ratedMovies,
  );

  const dispatch = useDispatch();

  const ratingChange = (rating: number): void => {
    dispatch(setRatingValue(rating));
    if (rating !== 0) {
      dispatch(rateMovie(movieDetails.id, rating, sessionId));
    }
  };

  // if (rating !== 0) {
  //   dispatch(rateMovie(movieDetails.id, rating, sessionId));
  // }

  const render = movieDetails.production_companies.map((company) => (
    <p key={company.id}>{company.name}</p>
  ));

  const renderDetails = () => (
    <div>
      <div>
        <h1>{movieDetails.original_title}</h1>
        {movieImages.backdrops.length === 0 && (
          <p className="warning">Image currently unavailable!</p>
        )}
        <div
          className="overview"
          style={{
            backgroundImage: `url(${posterUrl + movieDetails.backdrop_path})`,
          }}
        >
          <p>{movieDetails.overview}</p>
        </div>
      </div>

      <h3>Rating</h3>
      <p>{movieDetails.vote_average}</p>
      <h3>Popularity</h3>
      <p>{movieDetails.popularity}</p>
      <h3>Language</h3>
      <p>{movieDetails.original_language}</p>
      <h3>Production companies</h3>
      {movieDetails.production_companies.length === 0 ? <p>Unknown</p> : render}
      <button
        className="btn-primary"
        onClick={() => {
          dispatch(closeModal());
          dispatch(clearMovieDetails());
          dispatch(showMovieCard('flex'));
        }}
      >
        Close
      </button>
    </div>
  );

  const ratedMoviesId = ratedMovies.map((movie: State) => movie.id);

  let ratedId: null | number = null;

  if (ratedMoviesId.includes(movieDetails.id)) {
    ratedId = movieDetails.id;
  }

  const ratedMovieDetails = (
    id: null | number,
    movie: Array<{ id: number; rating: number }>,
  ) => {
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].id === id) {
        return movie[i];
      }
    }
  };

  const ratedMovie = ratedMovieDetails(ratedId, ratedMovies);

  const loggedOutInterface = (): JSX.Element => {
    return <div>{renderDetails()}</div>;
  };

  const loggedInInterface = (): JSX.Element => {
    return (
      <div>
        {renderDetails()}
        {ratedMovie ? (
          <div>
            <h3>Your Rating:</h3>
            <p>{ratedMovie.rating}</p>
          </div>
        ) : (
          <div>
            <h3>Rate Movie:</h3>
            <ReactStars
              size={35}
              count={10}
              isHalf={true}
              onChange={ratingChange}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="details-modal">
      {isLoggedIn ? loggedInInterface() : loggedOutInterface()}
    </div>
  );
};

export default MovieDetails;

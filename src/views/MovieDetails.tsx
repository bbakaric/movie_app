import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import {
  clearMovieDetails,
  closeModal,
  rateMovie,
  setRatingValue,
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
  ratedMovie: { id: number; rating: number }[];
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

  const loggedInInterface = (): JSX.Element => {
    return (
      <div>
        {ratedMovie ? (
          <div>
            <h3>
              Your Rating: <p>{ratedMovie.rating}</p>
            </h3>
          </div>
        ) : (
          <div style={{ marginTop: '-20px' }}>
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

  const render = movieDetails.production_companies.map((company) => (
    <p key={company.id}>{`${company.name},\u00A0`} </p>
  ));

  const renderDetails = () => {
    return (
      <div className="modal-content">
        <h1>{movieDetails.original_title}</h1>
        <div>
          {movieImages.backdrops.length === 0 && (
            <p className="warning">Image currently unavailable!</p>
          )}
          <div
            className="overview"
            style={{
              backgroundImage: `url(${posterUrl + movieDetails.backdrop_path})`,
            }}
          >
            <p>
              {movieDetails.overview.length === 0
                ? 'Description currently unavailable!'
                : movieDetails.overview}
            </p>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="details-content">
            <h3>
              Rating: <p>{movieDetails.vote_average}</p>
            </h3>
            <h3>
              Popularity: <p>{movieDetails.popularity}</p>
            </h3>

            <h3>
              Language: <p>{movieDetails.original_language}</p>
            </h3>

            <h3>
              Production companies:{' '}
              {movieDetails.production_companies.length === 0 ? (
                <p>Unknown</p>
              ) : (
                render
              )}
            </h3>
          </div>
          {isLoggedIn && loggedInInterface()}
        </div>
        <button
          className="btn-close"
          onClick={() => {
            dispatch(closeModal());
            dispatch(clearMovieDetails());
          }}
        >
          Close
        </button>
      </div>
    );
  };

  return <div className="details-modal">{renderDetails()}</div>;
};

export default MovieDetails;

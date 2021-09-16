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
  original_language: string;
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

  const renderMovieCard = (): JSX.Element => {
    return movies.map((movie: State) => {
      return (
        <div key={movie.id} className="movie-card">
          <div className="movie-info">
            <div className="poster">
              <img src={posterUrl + movie.poster_path} alt="poster" />
              <div className="rating-overlap">
                <i className="fas fa-star"></i>
                <h4>{movie.vote_average}</h4>
              </div>
              <div className="more-info">
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
            <div className="content">
              <h2>
                {movie.original_title} ({parseInt(movie.release_date)})
              </h2>
              <br />
              <p>Language: ({movie.original_language})</p>
            </div>
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
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return <div className="showcase-mid"> {renderMovieCard()} </div>;
};

export default MovieCard;

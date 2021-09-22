import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getMovies, showMovieDetails } from '../store/action-creators';
import LoadBtn from './LoadBtn';
import RouletteBtn from './RouletteBtn';

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

  const isLoggedIn = useSelector(
    (state: RootStateOrAny) => state.login.userInfo.isLoggedIn,
  );

  const dispatch = useDispatch();

  const renderMovieCard = (): JSX.Element => {
    return movies.map((movie: State) => {
      return (
        <div key={movie.id} className="movie-card">
          <div className="movie-info">
            {isLoggedIn ? (
              <div
                className="more-info"
                onClick={() => {
                  dispatch(showMovieDetails(movie.id, true, sessionId));
                }}
              >
                <i className="fas fa-info-circle"></i>
                <h4>More details ...</h4>
              </div>
            ) : (
              <div
                className="more-info"
                onClick={() => {
                  dispatch(showMovieDetails(movie.id, true, sessionId));
                }}
              >
                <i className="fas fa-info-circle"></i>
                <h4>More details ...</h4>
              </div>
            )}
            <div
              className="more-info"
              onClick={() => {
                dispatch(showMovieDetails(movie.id, true, null));
              }}
            >
              <i className="fas fa-info-circle"></i>
              <h4>More details ...</h4>
            </div>
            <div className="poster">
              <img src={posterUrl + movie.poster_path} alt="poster" />
              <div className="rating-overlap">
                <i className="fas fa-star"></i>
                <h4>{movie.vote_average}</h4>
              </div>
            </div>
            <div className="content">
              <h2>
                {movie.original_title} ({parseInt(movie.release_date)})
              </h2>
              <br />
              <p>Language: ({movie.original_language})</p>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="showcase-mid">
      {renderMovieCard()}
      <div className="btn-align">
        <LoadBtn />
        <RouletteBtn />
      </div>
    </div>
  );
};

export default MovieCard;

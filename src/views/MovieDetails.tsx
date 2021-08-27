import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const MovieDetails = () => {
  const movieDetails = useSelector(
    (state: RootStateOrAny) => state.movies.movieDetails,
  );

  const showModal = useSelector(
    (state: RootStateOrAny) => state.movies.showMovieDetailsModal,
  );

  const posterUrl = useSelector(
    (state: RootStateOrAny) => state.movies.posterUrl,
  );

  const render = movieDetails.production_companies.map((company) => (
    <p key={company.id}>{company.name}</p>
  ));

  return (
    <div>
      <p>
        <b>{movieDetails.original_title}</b>
      </p>
      <img src={posterUrl + movieDetails.backdrop_path} alt="backdroph" />
      <p>{movieDetails.overview}</p>
      <h3>Rating</h3>
      <p>{movieDetails.vote_average}</p>
      <h3>Popularity</h3>
      <p>{movieDetails.popularity}</p>
      <h3>Language</h3>
      <p>{movieDetails.original_language}</p>
      <h3>Production companies</h3>
      {movieDetails.production_companies.length === 0 ? <p>Unknown</p> : render}
      <p>________________________________________________</p>
    </div>
  );
};

export default MovieDetails;

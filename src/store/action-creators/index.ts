import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import movieApi from '../../services/movieApi';

const apiKey: string = '15917a5dc3c9b9fd8555303805fab8a5';

export const getMovies = (): any => async (dispatch: Dispatch) => {
  const response = await movieApi.get(
    `/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  );
  dispatch({
    type: ActionType.GET_MOVIES,
    payload: response.data.results,
  });
};

export const showMovieDetails =
  (movieId): any =>
  async (dispatch: Dispatch) => {
    const response = await movieApi.get(
      `/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    );
    dispatch({
      type: ActionType.GET_MOVIE_DETAILS,
      payload: response.data,
    });
  };

export const loadMovies =
  (page: number): any =>
  async (dispatch: Dispatch) => {
    const response = await movieApi.get(
      `/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
    );
    dispatch({
      type: ActionType.LOAD_MOVIES,
      payload: response.data.results,
    });
  };

export const showMovieDetailsModal =
  (show: boolean) => async (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionType.SHOW_MOVIE_DETAILS_MODAL,
        payload: show,
      });
    }, 500);
  };

export const showModal = (show) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SHOW_MODAL,
    payload: show,
  });
};

export const loadGenres = (): any => async (dispatch: Dispatch) => {
  const response = await movieApi.get(
    `/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
  );
  dispatch({
    type: ActionType.LOAD_GENRES,
    payload: response.data.genres,
  });
};

export const getRandomMovieId =
  (page, genreId): any =>
  async (dispatch: Dispatch) => {
    const element = Math.floor(Math.random() * 20);
    const response = await movieApi.get(
      `3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`,
    );
    dispatch({
      type: ActionType.GET_RANDOM_MOVIE_ID,
      payload: response.data.results[element].id,
    });
  };

export const showDetails = (show) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SHOW_DETAILS,
    payload: show,
  });
};

export const setGenreID = (genreId) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_GENRE_ID,
    payload: genreId,
  });
};

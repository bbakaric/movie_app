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
  (movieId: number, show: boolean, sessionId: null): any =>
  async (dispatch: Dispatch) => {
    const response = await movieApi.get(
      `/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    );
    dispatch({
      type: ActionType.GET_MOVIE_DETAILS,
      payload: response.data,
    });

    const responseImg = await movieApi.get(
      `/3/movie/${movieId}/images?api_key=${apiKey}&language=en-US&include_image_language=en,null`,
    );
    dispatch({
      type: ActionType.GET_MOVIE_IMAGES,
      payload: responseImg.data,
    });

    if (sessionId !== null) {
      const response_rated = await movieApi.get(
        `/3/guest_session/${sessionId}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc`,
      );
      dispatch({
        type: ActionType.GET_RATED_MOVIES,
        payload: response_rated.data.results,
      });
    }

    const display = show;
    dispatch({
      type: ActionType.SHOW_MOVIE_DETAILS_MODAL,
      payload: display,
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

export const showModal =
  (show: boolean) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: ActionType.SHOW_MODAL,
      payload: show,
    });
  };

export const closeModal =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: ActionType.CLOSE_MODAL,
      payload: false,
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

export const getRandomMovie =
  (genreId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const genre = genreId;

    dispatch({
      type: ActionType.SET_GENRE_ID,
      payload: genreId,
    });

    const element = Math.floor(Math.random() * 20);
    const page = Math.floor(Math.random() * 500) + 1;
    const response = await movieApi.get(
      `3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    );

    dispatch({
      type: ActionType.GET_RANDOM_MOVIE_ID,
      payload: response.data.results[element].id,
    });
  };

export const clearMovieDetails = (): object => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.CLEAR_MOVIE_DETAILS,
    payload: {},
  });

  dispatch({
    type: ActionType.GET_MOVIE_IMAGES,
    payload: {},
  });
};

export const getSessionId =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const response = await movieApi.get(
      `/3/authentication/guest_session/new?api_key=${apiKey}`,
    );
    dispatch({
      type: ActionType.GET_SESSION_ID,
      payload: response.data,
    });
  };

export const setUserInfo =
  (isLoggedIn: boolean, sessionId: string): object =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_USER_INFO,
      payload: { isLoggedIn, sessionId },
    });
  };

export const clearUserInfo =
  (isLoggedIn: boolean, sessionId: string): object =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DELETE_SESSION,
      payload: {},
    });

    dispatch({
      type: ActionType.CLEAR_USER_INFO,
      payload: { isLoggedIn, sessionId },
    });
  };

export const setRatingValue =
  (ratingValue: number): object =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_RATING_VALUE,
      payload: ratingValue,
    });
  };

export const rateMovie =
  (movieId: number, ratingValue: number, sessionId: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const response = await movieApi.post(
      `/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${sessionId}`,
      {
        value: ratingValue,
      },
    );
    dispatch({
      type: ActionType.RATE_MOVIE,
      payload: response.data,
    });
  };

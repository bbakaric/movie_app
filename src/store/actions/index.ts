import { ActionType } from '../action-types';

interface GetMoviesAction {
  type: ActionType.GET_MOVIES;
  payload: Array<object>;
}

interface LoadMoreMoviesAction {
  type: ActionType.LOAD_MOVIES;
  payload: Array<object>;
}

interface ShowMovieDetailsModalAction {
  type: ActionType.SHOW_MOVIE_DETAILS_MODAL;
  payload: boolean;
}

interface ShowModalAction {
  type: ActionType.SHOW_MODAL;
  payload: boolean;
}

interface CloseModalAction {
  type: ActionType.CLOSE_MODAL;
  payload: boolean;
}

interface LoadGenresAction {
  type: ActionType.LOAD_GENRES;
  payload: boolean;
}

interface GetRandomMovieId {
  type: ActionType.GET_RANDOM_MOVIE_ID;
  payload: Array<object>;
}

interface ShowMovieDetails {
  type: ActionType.GET_MOVIE_DETAILS;
  payload: Array<object>;
}

interface ShowMovieImages {
  type: ActionType.GET_MOVIE_IMAGES;
  payload: Array<object>;
}

interface ShowRandomMovieDetails {
  type: ActionType.SHOW_DETAILS;
  payload: boolean;
}

interface SetGenreId {
  type: ActionType.SET_GENRE_ID;
  payload: string;
}

interface ClearMovieDetails {
  type: ActionType.CLEAR_MOVIE_DETAILS;
  payload: object;
}

interface ClearMovieImages {
  type: ActionType.GET_MOVIE_IMAGES;
  payload: object;
}

interface GetSessionId {
  type: ActionType.GET_SESSION_ID;
  payload: object;
}

interface SetUserInfo {
  type: ActionType.SET_USER_INFO;
  payload: object;
}

interface ClearUserInfo {
  type: ActionType.CLEAR_USER_INFO;
  payload: object;
}

interface SetRatingValue {
  type: ActionType.SET_RATING_VALUE;
  payload: number;
}

interface RateMovie {
  type: ActionType.RATE_MOVIE;
  payload: number;
}

interface GetRatedMovies {
  type: ActionType.GET_RATED_MOVIES;
  payload: object;
}

interface DeleteSession {
  type: ActionType.DELETE_SESSION;
  payload: object;
}

export type Action =
  | GetMoviesAction
  | LoadMoreMoviesAction
  | ShowMovieDetailsModalAction
  | ShowModalAction
  | LoadGenresAction
  | GetRandomMovieId
  | ShowMovieDetails
  | ShowRandomMovieDetails
  | SetGenreId
  | ShowMovieImages
  | CloseModalAction
  | ClearMovieDetails
  | ClearMovieImages
  | GetSessionId
  | SetUserInfo
  | ClearUserInfo
  | SetRatingValue
  | RateMovie
  | GetRatedMovies
  | DeleteSession;

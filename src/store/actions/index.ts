import { ActionType } from '../action-types';

interface GetMoviesAction {
  type: ActionType.GET_MOVIES;
  payload: Array<object>;
}

interface LoadMoreMoviesAction {
  type: ActionType.LOAD_MOVIES;
  payload: Array<object>;
}

interface ShowModalAction {
  type: ActionType.SHOW_MODAL;
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

interface ShowMoviesDetails {
  type: ActionType.GET_MOVIE_DETAILS;
  payload: Array<object>;
}

interface ShowDetails {
  type: ActionType.SHOW_DETAILS;
  payload: boolean;
}

interface SetGenreId {
  type: ActionType.SET_GENRE_ID;
  payload: string;
}

export type Action =
  | GetMoviesAction
  | LoadMoreMoviesAction
  | ShowModalAction
  | LoadGenresAction
  | GetRandomMovieId
  | ShowMoviesDetails
  | ShowDetails
  | SetGenreId;

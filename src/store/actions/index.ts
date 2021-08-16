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

export type Action = GetMoviesAction | LoadMoreMoviesAction | ShowModalAction;

import { ActionType } from '../action-types';

interface GetMoviesAction {
  type: ActionType.GET_MOVIES;
  payload: Array<object>;
}

export type Action = GetMoviesAction;

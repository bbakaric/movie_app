import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  movies: [],
};

const movieReducer = (state: any = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;

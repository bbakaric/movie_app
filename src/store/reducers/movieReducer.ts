import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  movies: [],
};

const movieReducer = (state: object = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

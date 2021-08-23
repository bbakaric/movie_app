import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  movies: [],
  posterUrl: 'https://image.tmdb.org/t/p/w500',
  randomMovieDetails: [],
};

const movieReducer = (state: any = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionType.GET_MOVIE_DETAILS:
      return {
        ...state,
        randomMovieDetails: state.randomMovieDetails.concat([action.payload]),
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

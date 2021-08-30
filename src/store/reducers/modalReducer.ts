import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  showModal: false,
  genres: [],
  movieId: 0,
  showRandomMovieDetails: false,
  genreId: '',
};

const modalReducer = (state: any = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case ActionType.LOAD_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ActionType.GET_RANDOM_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      };

    case ActionType.SHOW_RANDOM_MOVIE_DETAILS:
      return {
        ...state,
        showRandomMovieDetails: action.payload,
      };
    case ActionType.SET_GENRE_ID:
      return {
        ...state,
        genreId: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;

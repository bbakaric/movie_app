import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  movies: [],
  posterUrl: 'https://image.tmdb.org/t/p/w500',
  movieDetails: {},
  movieImages: {},
  showMovieDetailsModal: false,
  movieRating: 0,
  ratingPostInfo: '',
  ratedMovies: [],
  showMovieCard: 'flex',
};

const movieReducer = (state = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionType.GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ActionType.GET_MOVIE_IMAGES:
      return {
        ...state,
        movieImages: action.payload,
      };
    case ActionType.SHOW_MOVIE_DETAILS_MODAL:
      return {
        ...state,
        showMovieDetailsModal: action.payload,
      };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        showMovieDetailsModal: action.payload,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case ActionType.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ActionType.GET_MOVIE_IMAGES:
      return {
        ...state,
        movieImages: action.payload,
      };
    case ActionType.SET_RATING_VALUE:
      return {
        ...state,
        movieRating: action.payload,
      };
    case ActionType.RATE_MOVIE:
      return {
        ...state,
        ratingPostInfo: action.payload,
      };
    case ActionType.GET_RATED_MOVIES:
      return {
        ...state,
        ratedMovies: action.payload,
      };
    case ActionType.SHOW_MOVIE_CARD:
      return {
        ...state,
        showMovieCard: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

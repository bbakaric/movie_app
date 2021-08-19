import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  modal: modalReducer,
});

export default rootReducer;

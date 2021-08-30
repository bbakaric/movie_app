import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  modal: modalReducer,
  login: loginReducer,
});

export default rootReducer;

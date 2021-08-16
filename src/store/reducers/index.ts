import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import showModalReducer from './showModalReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  modal: showModalReducer,
});

export default rootReducer;

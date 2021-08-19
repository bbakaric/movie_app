import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  showModal: false,
  genres: [],
};

const modalReducer = (state: any = initialState, action: Action): boolean => {
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
    default:
      return state;
  }
};

export default modalReducer;

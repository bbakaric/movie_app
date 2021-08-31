import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  sessionInfo: {},
  userInfo: {
    isLoggedIn: false,
    sessionId: '',
  },
};

const loginReducer = (state: object = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_SESSION_ID:
      return {
        ...state,
        sessionInfo: action.payload,
      };
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionType.DELETE_SESSION:
      return {
        ...state,
        sessionInfo: action.payload,
      };
    case ActionType.CLEAR_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

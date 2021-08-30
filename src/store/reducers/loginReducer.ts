import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  requestToken: {},
};

const loginReducer = (state: object = initialState, action: Action): object => {
  switch (action.type) {
    case ActionType.GET_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

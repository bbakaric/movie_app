import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  showModal: false,
};

const showModalReducer = (
  state: any = initialState,
  action: Action,
): boolean => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};

export default showModalReducer;

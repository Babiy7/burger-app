import * as ActionType from "../actions/actionTypes";
import { updatedState } from "../utility";

const innitialState = {
  token: null,
  error: false,
  loading: false,
  id: null
};

const loading = state => {
  return updatedState(state, { loading: true });
};
const success = (state, action) => {
  return updatedState(state, {
    loading: false,
    token: action.authData.idToken,
    id: action.authData.localId
  });
};
const fail = state => {
  return updatedState(state, { loading: false, error: true });
};

const authReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_AUTH:
      return loading(state);

    case ActionType.SUCCESS_AUTH:
      return success(state, action);

    case ActionType.FAIL_AUTH:
      return fail(state);

    default: {
      return state;
    }
  }
};

export default authReducer;

import * as ActionType from "../actions/actionTypes";
import { updatedState } from "../utility";

const innitialState = {
  token: null,
  error: null,
  loading: false,
  userId: null
};

const loading = state => {
  return updatedState(state, { loading: true, error: null });
};
const success = (state, action) => {
  return updatedState(state, {
    loading: false,
    token: action.authData.idToken,
    userId: action.authData.localId,
    error: null
  });
};
const fail = (state, action) => {
  return updatedState(state, { loading: false, error: action.error });
};
const logout = (state, action) => {
  return updatedState(state, { token: null, userId: null });
};

const authReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_LOADING:
      return loading(state);

    case ActionType.AUTH_SUCCESS:
      return success(state, action);

    case ActionType.AUTH_FAIL:
      return fail(state, action);
    case ActionType.AUTH_LOGOT:
      return logout(state, action);

    default: {
      return state;
    }
  }
};

export default authReducer;

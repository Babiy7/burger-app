import * as ActionType from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const innitialState = {
  token: null,
  error: null,
  loading: false,
  userId: null
};

const loading = state => updatedObject(state, { loading: true, error: null });

const refresh = (state, action) =>
  updatedObject(state, {
    loading: false,
    token: action.token,
    userId: action.userId,
    error: null
  });

const success = (state, action) =>
  updatedObject(state, {
    loading: false,
    token: action.token,
    userId: action.userId,
    error: null
  });

const fail = (state, action) =>
  updatedObject(state, { loading: false, error: action.error });

const logout = state => updatedObject(state, { token: null, userId: null });

const authReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_LOADING:
      return loading(state);

    case ActionType.AUTH_SUCCESS:
      return success(state, action);

    case ActionType.AUTH_REFRESH:
      return refresh(state, action);

    case ActionType.AUTH_FAIL:
      return fail(state, action);

    case ActionType.AUTH_LOGOUT:
      console.log("reducer logout");
      return logout(state, action);

    default:
      return state;
  }
};

export default authReducer;

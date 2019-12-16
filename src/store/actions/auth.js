import * as ActionType from "./actionTypes";
import axios from "axios";

export const authLoading = () => {
  return {
    type: ActionType.AUTH_LOADING
  };
};

export const authSuccess = authData => {
  return {
    type: ActionType.AUTH_SUCCESS,
    token: authData.idToken,
    userId: authData.localId
  };
};

const authRefresh = authData => {
  return {
    type: ActionType.AUTH_REFRESH,
    token: authData.idToken,
    userId: authData.localId
  };
};

export const authFail = error => {
  return {
    type: ActionType.AUTH_FAIL,
    error: error
  };
};

export const checkAuthTimeout = expirationTime => {
  return {
    type: ActionType.AUTH_EXPERATION_TIME,
    experationTime: expirationTime
  };
};

export const logoutSuccess = () => {
  return {
    type: ActionType.AUTH_LOGOUT
  };
};

export const logout = () => {
  return {
    type: ActionType.AUTH_INITIATE_LOGOT
  };
};

export const checkUserIsSignIn = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authLoading());
      const userId = localStorage.getItem("userId");
      const expiresDate = new Date(localStorage.getItem("expires")).getTime();
      dispatch(authRefresh({ idToken: token, localId: userId }));
      if (expiresDate > new Date().getTime()) {
        const expiresDateInMiliseconds = expiresDate * 1000;
        dispatch(checkAuthTimeout(expiresDateInMiliseconds));
      } else {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: ActionType.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp
  };
};

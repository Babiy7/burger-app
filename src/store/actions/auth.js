import * as ActionType from "./actionTypes";

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

export const authRefresh = authData => {
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

export const auth = (email, password, isSignUp) => {
  return {
    type: ActionType.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp
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
  return {
    type: ActionType.AUTH_USER_ISLOGIN
  };
};

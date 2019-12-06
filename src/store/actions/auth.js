import * as ActionType from "./actionTypes";
import axios from "axios";

const authLoading = () => {
  return {
    type: ActionType.AUTH_LOADING
  };
};

const authSuccess = authData => {
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

const authFail = error => {
  return {
    type: ActionType.AUTH_FAIL,
    error: error
  };
};

const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expires");
  return {
    type: ActionType.AUTH_LOGOT
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
  return dispatch => {
    dispatch(authLoading());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOncmZRwGcdaSzlAgf7H_m5EjVVbzPNsk";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOncmZRwGcdaSzlAgf7H_m5EjVVbzPNsk";
    }

    axios
      .post(url, authData)
      .then(response => {
        const expirationTime = response.data.expiresIn * 1000;

        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem(
          "expires",
          new Date(new Date().getTime() + expirationTime)
        );

        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

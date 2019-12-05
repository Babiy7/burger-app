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
      const userId = localStorage.getItem("userId");
      const expiresIn = localStorage.getItem("expires");
      dispatch(
        authSuccess({ idToken: token, localId: userId, expiresIn: expiresIn })
      );
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
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("expires", response.data.expiresIn);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

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
    authData: authData
  };
};
const authFail = error => {
  return {
    type: ActionType.AUTH_FAIL,
    error: error
  };
};

const logout = () => {
  return {
    type: ActionType.AUTH_LOGOT
  };
};

const checkAuthTimeout = expirationTime => {
  console.log(expirationTime);
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
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
        console.log(response);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

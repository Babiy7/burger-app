import * as ActionType from "./actionTypes";
import axios from "axios";

const authLoading = () => {
  return {
    type: ActionType.LOADING_AUTH
  };
};
const authSuccess = authData => {
  return {
    type: ActionType.SUCCESS_AUTH,
    authData: authData
  };
};
const authFail = error => {
  return {
    type: ActionType.FAIL_AUTH,
    error: error
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
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

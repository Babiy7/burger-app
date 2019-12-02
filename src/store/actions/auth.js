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

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authLoading());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOncmZRwGcdaSzlAgf7H_m5EjVVbzPNsk",
        authData
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

import { put, delay } from "redux-saga/effects";
import * as ActionCreator from "../actions/";
import axios from "axios";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("userId");
  yield localStorage.removeItem("expires");
  yield put(ActionCreator.logoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
  const experationTime = action.experationTime;
  yield delay(experationTime * 1000);
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("userId");
  yield localStorage.removeItem("expires");
  yield put(ActionCreator.logoutSuccess());
}

export function* authUserSaga(action) {
  yield put(ActionCreator.authLoading());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOncmZRwGcdaSzlAgf7H_m5EjVVbzPNsk";

  if (!action.isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOncmZRwGcdaSzlAgf7H_m5EjVVbzPNsk";
  }
  try {
    const response = yield axios.post(url, authData);
    const expirationTime = response.data.expiresIn * 1000;

    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userId", response.data.localId);
    yield localStorage.setItem(
      "expires",
      new Date(new Date().getTime() + expirationTime)
    );
    yield put(ActionCreator.authSuccess(response.data));
    yield put(ActionCreator.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(ActionCreator.authFail(error.response.data.error));
  }
}

export function* checkUserIsSignInSaga(action) {
  const token = yield localStorage.getItem("token");

  if (token) {
    yield put(ActionCreator.authLoading());
    const userId = yield localStorage.getItem("userId");
    const expiresDate = yield new Date(
      localStorage.getItem("expires")
    ).getTime();
    yield put(ActionCreator.authRefresh({ idToken: token, localId: userId }));
    if (expiresDate > new Date().getTime()) {
      const expiresDateInMiliseconds = expiresDate * 1000;
      yield put(ActionCreator.checkAuthTimeout(expiresDateInMiliseconds));
    } else {
      yield put(ActionCreator.logout());
    }
  } else {
    yield put(ActionCreator.logout());
  }
}

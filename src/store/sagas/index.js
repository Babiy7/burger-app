import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  checkUserIsSignInSaga
} from "./auth";

import { initIngredients } from "./burgerBuilder";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_EXPERATION_TIME, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_USER_ISLOGIN, checkUserIsSignInSaga);
}
export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.SET_INGREDIENTS_SAGA, initIngredients);
}

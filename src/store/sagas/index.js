import { takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga } from "./auth";

export function* watchAuth() {
  console.log("watch");
  yield takeEvery(actionType.AUTH_INITIATE_LOGOT, logoutSaga);
  yield takeEvery(actionType.AUTH_EXPERATION_TIME, checkAuthTimeoutSaga);
  yield takeEvery(actionType.AUTH_USER, authUserSaga);
}

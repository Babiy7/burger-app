import { put } from "redux-saga/effects";
import * as actions from "../actions/";
import * as actionType from "../actions/actionTypes";
import AxiosOrders from "../../axios-orders";

export function* initOrders(action) {
  yield put({ type: actionType.LOADING_ORDER, payload: true });
  const queryParams =
    "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  try {
    const response = yield AxiosOrders.get("/orders.json" + queryParams);

    put(actions.initOrdersBurger(response.data));
    put({ type: actionType.LOADING_ORDER, payload: false });
  } catch (error) {
    put(actions.failOrdersBurger());
  }
}

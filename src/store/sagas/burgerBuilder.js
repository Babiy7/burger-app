import AxiosOrders from "../../axios-orders";
import { put } from "redux-saga/effects";
import * as actions from "../actions/";

export function* initIngredients(action) {
  const response = yield AxiosOrders.get("/initBurger.json");
  const ingredients = response.data.ingredients;
  const basePrice = response.data.basePrice;
  yield put(actions.init(ingredients, basePrice));
}

import * as ActionType from "./actionTypes";
import AxiosOrders from "../../axios-orders";

export const initOrdersBurger = responseOrders => {
  return {
    type: ActionType.INIT_ORDERS,
    orders: responseOrders
  };
};

export const failOrdersBurger = () => {
  return {
    type: ActionType.INIT_ORDERS,
    error: true
  };
};

export const initOrders = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_ORDER, payload: true });
    AxiosOrders.get("/orders.json")
      .then(response => {
        dispatch(initOrdersBurger(response.data));
        dispatch({ type: ActionType.LOADING_ORDER, payload: false });
      })
      .catch(error => {
        dispatch(failOrdersBurger());
      });
  };
};

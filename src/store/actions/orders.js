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

export const initOrders = token => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_ORDER, payload: true });
    AxiosOrders.get("/orders.json?auth=" + token)
      .then(response => {
        dispatch(initOrdersBurger(response.data));
        dispatch({ type: ActionType.LOADING_ORDER, payload: false });
      })
      .catch(error => {
        dispatch(failOrdersBurger());
      });
  };
};

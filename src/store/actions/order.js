import * as ActionType from "./actionTypes";
import AxiosOrders from "../../axios-orders";

export const orderBurgerSuccess = (id, orderData) => {
  return {
    type: ActionType.SUCCESS_ORDER,
    id: id,
    order: orderData
  };
};

export const orderBurgerFail = error => {
  return {
    type: ActionType.FAIL_ORDER,
    error: error
  };
};

export const orderStart = (orderData, token) => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_ORDER, payload: true });
    AxiosOrders.post("/orders.json?auth=" + token, orderData)
      .then(response => {
        console.log(response.data);
        dispatch(orderBurgerSuccess(response.data, orderData));
        dispatch({ type: ActionType.LOADING_ORDER, payload: false });
      })
      .catch(error => {
        dispatch(orderBurgerFail(error));
      });
  };
};

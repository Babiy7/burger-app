import * as ActionType from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const innitialState = {
  error: null,
  orders: null,
  loading: false
};

const init = (state, action) =>
  updatedObject(state, { orders: action.orders, error: false });

const loading = state => updatedObject(state, { loading: true });

const fail = (state, action) => updatedObject(state, { error: action.error });

const ordersReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.INIT_ORDERS:
      return init(state, action);

    case ActionType.LOADING_ORDER:
      return loading(state);

    case ActionType.FAIL_ORDERS:
      return fail(state, action);

    default:
      return state;
  }
};

export default ordersReducer;

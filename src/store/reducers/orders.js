import * as ActionType from "../actions/actionTypes";

const innitialState = {
  error: false,
  orders: null,
  loading: false
};

const ordersReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.INIT_ORDERS: {
      return {
        ...state,
        orders: action.orders,
        error: false
      };
    }
    case ActionType.LOADING_ORDER: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case ActionType.FAIL_ORDERS: {
      return {
        ...state,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default ordersReducer;

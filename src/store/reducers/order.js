import * as ActionType from "../actions/actionTypes";

const innitialState = {
  success: false,
  error: false,
  errorMessage: "",
  orders: [],
  order: {},
  loading: false
};

const ingredientsReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.INIT_ORDERS: {
      return {
        ...state,
        orders: state.orders.concat(action.orders),
        loading: false
      };
    }
    case ActionType.SUCCESS_ORDER: {
      return {
        ...state,
        success: true,
        order: { id: action.id, order: action.order },
        loading: false
      };
    }
    case ActionType.FAIL_ORDER: {
      return {
        ...state,
        error: true,
        errorMessage: action.error,
        loading: false
      };
    }
    case ActionType.LOADING_ORDER: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;

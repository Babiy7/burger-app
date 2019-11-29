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
        orders: state.orders.concat(action.orders)
      };
    }
    case ActionType.SUCCESS_ORDER: {
      console.log(action);
      return {
        ...state,
        success: true,
        order: { id: action.id, order: action.order }
      };
    }
    case ActionType.FAIL_ORDER: {
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    }
    case ActionType.LOADING_ORDER: {
      return {
        ...state,
        loading: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;

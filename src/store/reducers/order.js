import * as ActionType from "../actions/actionTypes";

const innitialState = {
  success: false,
  error: false,
  errorMessage: "",
  orders: [],
  loading: false
};

const ingredientsReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.SUCCESS_ORDER: {
      return {
        ...state,
        success: true,
        orders: state.orders.concat([
          { id: action.id, order: action.orderData }
        ])
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

import * as ActionType from "../actions/actionTypes";
import { updatedState } from "../../shared/utility";

const innitialState = {
  success: false,
  error: null,
  orders: [],
  order: {},
  loading: false
};

const init = (state, action) =>
  updatedState(state, {
    orders: state.orders.concat(action.orders),
    loading: false,
    error: null
  });

const success = (state, action) =>
  updatedState(state, {
    success: true,
    order: { id: action.id, order: action.order },
    loading: false,
    error: null
  });

const fail = (state, action) =>
  updatedState(state, {
    error: action.error,
    errorMessage: action.error,
    loading: false
  });

const loading = state => updatedState(state, { loading: true });

const ingredientsReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.INIT_ORDERS: {
      return init(state, action);
    }
    case ActionType.SUCCESS_ORDER: {
      return success(state, action);
    }
    case ActionType.FAIL_ORDER: {
      return fail(state, action);
    }
    case ActionType.LOADING_ORDER: {
      return loading(state);
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;

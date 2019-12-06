import { combineReducers } from "redux";
import ingredientsReducer from "./burgerBuilder";
import orderReducer from "./order";
import ordersReducer from "./orders";
import authReducer from "./auth";

const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  orderStore: orderReducer,
  ordersStore: ordersReducer,
  authStore: authReducer
});

export default rootReducer;

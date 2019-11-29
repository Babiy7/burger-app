import { combineReducers } from "redux";
import ingredientsReducer from "./burgerBuilder";
import orderReducer from "./order";
import ordersReducer from "./orders";

const rootReducer = combineReducers({
  ingredientsStore: ingredientsReducer,
  orderStore: orderReducer,
  ordersStore: ordersReducer
});

export default rootReducer;

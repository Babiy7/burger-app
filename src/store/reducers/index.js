import { combineReducers } from "redux";
import ingredientsReducer from "./burgerBuilder";
import orderReducer from "./order";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer
});

export default rootReducer;

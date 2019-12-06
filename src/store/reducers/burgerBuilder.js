import * as ActionType from "../actions/actionTypes";
import { updatedState } from "../../shared/utility";

const innitialState = {
  ingredients: null,
  basePrice: null
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1,
  cheese: 0.7,
  bacon: 0.8
};

const remove = (state, action) => {
  return updatedState(state, {
    ingredients: {
      ...state.ingredients,
      [action.typeIngredient]: state.ingredients[action.typeIngredient] - 1
    },
    basePrice: state.basePrice - INGREDIENT_PRICES[action.typeIngredient]
  });
};

const add = (state, action) => {
  return updatedState(state, {
    ingredients: {
      ...state.ingredients,
      [action.typeIngredient]: state.ingredients[action.typeIngredient] + 1
    },
    basePrice: state.basePrice - INGREDIENT_PRICES[action.typeIngredient]
  });
};

const init = (state, action) => {
  return updatedState(state, {
    ingredients: action.ingredients,
    basePrice: action.basePrice
  });
};

const ingredientsReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.REMOVE_INGREDIENTS: {
      return remove(state, action);
    }
    case ActionType.ADD_INGREDIENTS: {
      return add(state, action);
    }
    case ActionType.INIT_INGREDIENTS: {
      return init(state, action);
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;

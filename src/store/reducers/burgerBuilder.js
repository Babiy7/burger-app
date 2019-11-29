import * as ActionType from "../actions/actionTypes";

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

const ingredientsReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionType.REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.typeIngredient]: state.ingredients[action.typeIngredient] - 1
        },
        basePrice: state.basePrice - INGREDIENT_PRICES[action.typeIngredient]
      };
    }
    case ActionType.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.typeIngredient]: state.ingredients[action.typeIngredient] + 1
        },
        basePrice: state.basePrice + INGREDIENT_PRICES[action.typeIngredient]
      };
    }
    case ActionType.INIT_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
        basePrice: action.basePrice
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;

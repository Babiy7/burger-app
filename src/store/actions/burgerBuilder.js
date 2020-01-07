import * as ActionTypes from "./actionTypes";
import AxiosOrders from "../../axios-orders";

const add = typeIngredient => {
  return {
    type: ActionTypes.ADD_INGREDIENTS,
    typeIngredient: typeIngredient
  };
};

const remove = typeIngredient => {
  return {
    type: ActionTypes.REMOVE_INGREDIENTS,
    typeIngredient: typeIngredient
  };
};

export const init = (ingredients, basePrice) => {
  return {
    type: ActionTypes.INIT_INGREDIENTS,
    ingredients: ingredients,
    basePrice: basePrice
  };
};

export const addIngredients = typeIngredient => {
  return add(typeIngredient);
};

export const removeIngredients = typeIngredient => {
  return remove(typeIngredient);
};

export const initIngredients = () => {
  return {
    type: ActionTypes.SET_INGREDIENTS_SAGA
  };
};

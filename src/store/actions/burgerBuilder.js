import * as ActionType from "./actionTypes";
import AxiosOrders from "../../axios-orders";

const add = typeIngredient => {
  return {
    type: ActionType.ADD_INGREDIENTS,
    typeIngredient: typeIngredient
  };
};
const remove = typeIngredient => {
  return {
    type: ActionType.REMOVE_INGREDIENTS,
    typeIngredient: typeIngredient
  };
};
const init = typeIngredient => {
  return {
    type: ActionType.INIT_INGREDIENTS,
    typeIngredient: typeIngredient
  };
};

export const addIngredients = typeIngredient => {
  return add(typeIngredient);
};
export const removeIngredients = typeIngredient => {
  return remove(typeIngredient);
};
export const initIngredients = () => {
  return dispatch => {
    AxiosOrders.get("/ingredients.json")
      .then(response => {
        dispatch({
          type: ActionType.INIT_INGREDIENTS,
          ingredients: response.data
        });
      })
      .catch(error => {});
    return {};
  };
};

import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  return (
    <div
      style={{
        width: "500px",
        height: "150px"
      }}
    >
      <BurgerIngredient type="bread-top"></BurgerIngredient>
    </div>
  );
};

export default Burger;

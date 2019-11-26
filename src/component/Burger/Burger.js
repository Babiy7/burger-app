import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformIngredients = null;
  transformIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((array, el) => {
      return array.concat(el);
    }, []);
  if (transformIngredients.length === 0 && props.visible) {
    transformIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div
      style={{
        height: props.height ? props.height : "420px",
        width: props.width ? props.width : "500px"
      }}
      className={classes.Burger}
    >
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      {props.price ? (
        <p className={classes.Price}>
          Current price: <strong>{props.price.toFixed(2)}$</strong>
        </p>
      ) : null}
      <BurgerIngredient type="bread-bottom" />
      {props.content ? props.content : null}
    </div>
  );
};

export default Burger;

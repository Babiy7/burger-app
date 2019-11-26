import React from "react";
import classes from "./Order.module.css";
import Burger from "../Burger";

const Order = props => {
  const ingredients = Object.keys(props.ingredients).map(ingredient => {
    const ingred = ingredient;
    const count = props.ingredients[ingredient];
    return (
      <p key={ingredient}>
        {ingred}: {count}
      </p>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Name: {props.name} </p>
      <p>email: {props.email} </p>
      <p>street: {props.street} </p>
      <p>delivery: {props.delivery} </p>
      Ingredients:
      <div className={classes.SectionBurger}>
        <div>{ingredients}</div>
        <div className={classes.Burger}>
          <Burger
            height="180px"
            width="220px"
            ingredients={props.ingredients}
          />
        </div>
      </div>
      <p>Price: {props.price}$ </p>
      <p>{props.date}</p>
    </div>
  );
};

export default Order;

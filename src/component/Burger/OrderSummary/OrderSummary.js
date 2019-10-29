import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const summaryIngredients = Object.keys(props.ingredients).map(
    ingredientsKey => {
      return (
        <li key={ingredientsKey}>
          <span style={{ textTransform: "capitalize" }}>
            {ingredientsKey}: {props.ingredients[ingredientsKey]}
          </span>
        </li>
      );
    }
  );
  return (
    <>
      <h2>Your Order</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul> {summaryIngredients} </ul>
      <p>
        <strong>Price: {props.price}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button type="Danger" clicked={props.cancel}>
        CANSEL
      </Button>
      <Button type="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;

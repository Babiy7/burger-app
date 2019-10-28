import React from "react";

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
      <p>Continue to checkout?</p>
    </>
  );
};

export default OrderSummary;

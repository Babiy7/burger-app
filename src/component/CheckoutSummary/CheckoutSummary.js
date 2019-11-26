import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

const Buttons = props => (
  <>
    <Button clicked={props.checkoutCancel} type="Danger">
      Cancel
    </Button>
    <Button clicked={props.checkoutContinue} type="Success">
      Continue
    </Button>
  </>
);

const CheckoutSummary = props => {
  const buttons = (
    <Buttons
      checkoutCancel={props.checkoutCancel}
      checkoutContinue={props.checkoutContinue}
    />
  );
  return (
    <>
      <h1>The burger is really tasty!!!</h1>
      <Burger ingredients={props.ingredients} content={buttons} />
    </>
  );
};

export default CheckoutSummary;

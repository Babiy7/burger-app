import React, { Component } from "react";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      meat: 5,
      cheese: 3,
      bacon: 2
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;

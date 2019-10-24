import React, { Component } from "react";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
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

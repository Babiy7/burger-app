import React, { Component } from "react";
import Burger from "../../component/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controls</div>
      </>
    );
  }
}

export default BurgerBuilder;

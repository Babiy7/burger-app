import React, { Component } from "react";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  removeIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    if (ingredients[type] !== 0) {
      ingredients[type] = ingredients[type] - 1;
    }
    this.setState({
      ingredients: ingredients
    });
  };

  addIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = ingredients[type] + 1;
    this.setState({
      ingredients: ingredients
    });
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addedIngredients={this.addIngredients}
          removedIngredients={this.removeIngredients}
        />
      </>
    );
  }
}

export default BurgerBuilder;

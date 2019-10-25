import React, { Component } from "react";
import classes from "./BurgerBuilder.module.css";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1,
  cheese: 0.7,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    },
    basePrise: 4
  };

  removeIngredients = type => {
    const state = this.state;
    const ingredients = { ...state.ingredients };
    let newPrice = state.basePrise;
    if (ingredients[type] !== 0) {
      ingredients[type] = ingredients[type] - 1;
      newPrice = state.basePrise - INGREDIENT_PRICES[type];
    } else {
      alert(`${type}  is no longer in your burger!`);
    }
    this.setState({
      ingredients: ingredients,
      basePrise: newPrice
    });
  };

  addIngredients = type => {
    const state = this.state;
    const ingredients = { ...state.ingredients };
    ingredients[type] = ingredients[type] + 1;
    const newPrice = state.basePrise + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: ingredients,
      basePrise: newPrice
    });
  };

  render() {
    console.log(this.state.basePrise);
    return (
      <div className={classes.Content}>
        <div className={classes.Left}>
          <Burger
            ingredients={this.state.ingredients}
            price={this.state.basePrise}
          />
        </div>
        <div className={classes.Right}>
          <BuildControls
            addedIngredients={this.addIngredients}
            removedIngredients={this.removeIngredients}
          />
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;

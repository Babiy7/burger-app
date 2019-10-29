import React, { Component } from "react";
import classes from "./BurgerBuilder.module.css";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1,
  cheese: 0.7,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    basePrise: 1,
    purchasable: false,
    purchasing: false
  };

  purchasable = ingredients => {
    const sum = Object.keys(this.state.ingredients)
      .map(keyIngredient => {
        return ingredients[keyIngredient];
      })
      .reduce((sum, current) => {
        return sum + current;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  removeIngredients = type => {
    const state = this.state;
    const ingredients = { ...state.ingredients };
    let newPrice = state.basePrise;
    if (ingredients[type] !== 0) {
      ingredients[type] = ingredients[type] - 1;
      newPrice = state.basePrise - INGREDIENT_PRICES[type];
    }
    this.setState({
      ingredients: ingredients,
      basePrise: newPrice
    });
    this.purchasable(ingredients);
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
    this.purchasable(ingredients);
  };

  updatePurchasingState = () => {
    this.setState({ purchasing: true });
  };

  unShowModal = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasing = () => {
    this.unShowModal();
    alert("Your burger is ready, Be prepared to pay!");
  };

  render() {
    const state = this.state;

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <div className={classes.Content}>
        <div className={classes.Left}>
          <Burger ingredients={state.ingredients} price={state.basePrise} />
        </div>
        <div className={classes.Right}>
          <BuildControls
            addedIngredients={this.addIngredients}
            removedIngredients={this.removeIngredients}
            purchasable={state.purchasable}
            disabledBtn={disabledInfo}
            purchasing={this.updatePurchasingState}
          />
        </div>
        <Modal unShow={this.unShowModal} show={state.purchasing}>
          <OrderSummary
            cancel={this.unShowModal}
            continue={this.continuePurchasing}
            ingredients={state.ingredients}
            price={state.basePrise.toFixed(2)}
          />
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;

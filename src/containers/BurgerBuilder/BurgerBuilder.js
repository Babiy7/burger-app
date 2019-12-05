import React, { Component } from "react";
import classes from "./BurgerBuilder.module.css";

import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import AxiosOrders from "../../axios-orders";
import Spinner from "../../component/UI/Spinner/Spinner";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { Redirect } from "react-router-dom";
import * as ActionCreator from "../../store/actions/";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.initIngredients();
    }
  }

  purchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(keyIngredient => {
        return ingredients[keyIngredient];
      })
      .reduce((sum, current) => {
        return sum + current;
      }, 0);
    return sum > 0;
  };

  updatePurchasingState = () => {
    this.setState({ purchasing: true });
  };

  unShowModal = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasing = () => {
    this.props.history.push({
      pathname: "/checkout"
    });
  };

  render() {
    console.log(new Date(new Date()));
    const state = this.state;

    const disabledInfo = {
      ...this.props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = null;

    if (this.props.ingredients) {
      burger = (
        <>
          <div className={classes.Left}>
            <Burger
              visible
              ingredients={this.props.ingredients}
              price={this.props.basePrice}
            />
          </div>
          <div className={classes.Right}>
            <BuildControls
              addedIngredients={this.props.addIngredients}
              removedIngredients={this.props.removeIngredients}
              purchasable={this.purchasable(this.props.ingredients)}
              disabledBtn={disabledInfo}
              purchasing={this.updatePurchasingState}
            />
          </div>
        </>
      );
      if (state.loading) {
        orderSummary = <Spinner />;
      } else {
        orderSummary = (
          <OrderSummary
            cancel={this.unShowModal}
            continue={this.continuePurchasing}
            ingredients={this.props.ingredients}
            price={this.props.basePrice.toFixed(2)}
          />
        );
      }
    } else {
      burger = <Spinner />;
    }
    return (
      <div className={classes.Content}>
        {!this.props.isAuth ? <Redirect to="/auth" /> : null}
        {burger}
        <Modal unShow={this.unShowModal} show={state.purchasing}>
          {orderSummary}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredientsStore.ingredients,
    basePrice: state.ingredientsStore.basePrice,
    isAuth: state.authStore.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIngredients: typeIngredient =>
      dispatch(ActionCreator.addIngredients(typeIngredient)),
    removeIngredients: typeIngredient =>
      dispatch(ActionCreator.removeIngredients(typeIngredient)),
    initIngredients: () => dispatch(ActionCreator.initIngredients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, AxiosOrders));

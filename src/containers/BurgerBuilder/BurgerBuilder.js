import React, { Component } from "react";
import classes from "./BurgerBuilder.module.css";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import AxiosOrders from "../../axios-orders";
import Spinner from "../../component/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as ActionType from "../../store/action";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    // setTimeout(() => {
    //   AxiosOrders.get("/ingredients.json")
    //     .then(response => {
    //       this.setState({ ingredients: response.data });
    //     })
    //     .catch(error => {});
    // }, 1000);
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

  // removeIngredients = type => {
  //   const state = this.state;
  //   const ingredients = { ...state.ingredients };
  //   let newPrice = state.basePrise;
  //   if (ingredients[type] !== 0) {
  //     ingredients[type] = ingredients[type] - 1;
  //     newPrice = state.basePrise - INGREDIENT_PRICES[type];
  //   }
  //   this.setState({
  //     ingredients: ingredients,
  //     basePrise: newPrice
  //   });
  //   this.purchasable(ingredients);
  // };

  // addIngredients = type => {
  //   const state = this.state;
  //   const ingredients = { ...state.ingredients };
  //   ingredients[type] = ingredients[type] + 1;
  //   const newPrice = state.basePrise + INGREDIENT_PRICES[type];
  //   this.setState({
  //     ingredients: ingredients,
  //     basePrise: newPrice
  //   });
  //   this.purchasable(ingredients);
  // };

  updatePurchasingState = () => {
    this.setState({ purchasing: true });
  };

  unShowModal = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasing = () => {
    // const queryParams = [];
    // for (let i in this.props.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.props.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.props.basePrise);
    // const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout"
      // search: "?" + queryString
    });
  };

  render() {
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
    ingredients: state.ingredients,
    basePrice: state.basePrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIngredients: typeIngredient =>
      dispatch({
        type: ActionType.ADD_INGREDIENTS,
        typeIngredient: typeIngredient
      }),
    removeIngredients: typeIngredient =>
      dispatch({
        type: ActionType.REMOVE_INGREDIENTS,
        typeIngredient: typeIngredient
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, AxiosOrders));

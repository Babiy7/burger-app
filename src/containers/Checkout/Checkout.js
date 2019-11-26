import React, { Component } from "react";
import CheckoutSummary from "../../component/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      price: 0
    };
  }

  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);

  //   let ingredients = {};
  //   let price = 0;

  //   for (let param of query) {
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }

  //   this.setState({
  //     ingredients: ingredients,
  //     price: price
  //   });
  // }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.push(this.props.match.path + "/contact");
  };

  render() {
    console.log(this.props);
    return this.props.ingredients ? (
      <>
        <CheckoutSummary
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.props.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact"}
          component={ContactData}
        />
      </>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);

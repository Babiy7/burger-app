import React, { Component } from "react";
import CheckoutSummary from "../../component/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
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
    ingredients: state.ingredients.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);

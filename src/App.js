import React, { Component } from "react";
import classes from "./App.module.css";
import withLazy from "./hoc/withLazy/withLazy";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Logout/Logout";

import Layout from "../src/hoc/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionCreator from "./store/actions/";

const Checkout = withLazy(() => import("./containers/Checkout/Checkout"));
const Orders = withLazy(() => import("./containers/Orders/Orders"));
const Auth = withLazy(() => import("./containers/Auth/Auth"));

class App extends Component {
  componentDidMount() {
    this.props.checkUserIsSignIn();
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className={classes.App}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.authStore.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUserIsSignIn: () => dispatch(ActionCreator.checkUserIsSignIn())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

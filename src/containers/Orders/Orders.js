import React, { Component } from "react";
import Order from "../../component/Burger/Order/Order";
import AxiosOrders from "../../axios-orders";
import { connect } from "react-redux";
import * as ActionCreator from "../../store/actions/";
import Spinner from "../../component/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  componentDidMount() {
    this.props.pullOrders(this.props.token, this.props.userId);
  }

  render() {
    return (
      <>
        {this.props.orders ? (
          Object.keys(this.props.orders).map(id => {
            const order = this.props.orders[id];
            return (
              <Order
                key={id}
                name={order.name}
                email={order.email}
                street={order.address}
                delivery={order.delivery}
                date={order.date}
                ingredients={order.burger}
                price={order.price}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.ordersStore.orders,
    token: state.authStore.token,
    userId: state.authStore.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pullOrders: (token, userId) =>
      dispatch(ActionCreator.initOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, AxiosOrders));

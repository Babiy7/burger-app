import React, { Component } from "react";
import Burger from "../../component/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Build controls</div>
      </>
    );
  }
}

export default BurgerBuilder;

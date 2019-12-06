import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem clicked={props.clicked} exact link="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/orders">
        Orders
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/logout">
        Logout
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;

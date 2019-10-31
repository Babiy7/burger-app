import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/"> Order </NavigationItem>
      <NavigationItem link="/"> Orders </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
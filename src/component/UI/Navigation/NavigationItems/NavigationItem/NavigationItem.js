import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink
      activeClassName={classes.active}
      exact={props.exact ? true : false}
      to={props.link}
      onClick={props.clicked}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;

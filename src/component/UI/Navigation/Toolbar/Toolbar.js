import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <ul className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </ul>
    </div>
  );
};

export default Toolbar;

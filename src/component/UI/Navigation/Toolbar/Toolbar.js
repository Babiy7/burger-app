import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../Logo/Logo";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <ul>Menu</ul>
    </div>
  );
};

export default Toolbar;

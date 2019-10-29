import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <main className={classes.Main}>{props.children}</main>
    </div>
  );
};

export default Layout;

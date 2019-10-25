import React from "react";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Toolbar}>Drawer, logo</div>
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;

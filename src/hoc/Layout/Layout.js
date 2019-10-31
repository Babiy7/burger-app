import React, { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../component/UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../component/UI/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [open, setOpen] = useState(false);

  function sideDrawerToggleHandler() {
    setOpen(!open);
  }

  function sideDrawerClosedHandler() {
    setOpen(!open);
  }
  return (
    <div className={classes.Layout}>
      <Toolbar clicked={sideDrawerToggleHandler} open={open} />
      <SideDrawer open={open} handleShow={sideDrawerClosedHandler} />
      <main className={classes.Main}>{props.children}</main>
    </div>
  );
};

export default Layout;

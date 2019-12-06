import React, { useState } from "react";
import classes from "./Layout.module.css";

import Toolbar from "../../component/UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../component/UI/Navigation/SideDrawer/SideDrawer";

import { connect } from "react-redux";

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
      {props.isAuth ? (
        <>
          <Toolbar clicked={sideDrawerToggleHandler} open={open} />
          <SideDrawer
            clicked={sideDrawerToggleHandler}
            open={open}
            handleShow={sideDrawerClosedHandler}
          />
        </>
      ) : null}

      <main className={classes.Main}>{props.children}</main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.authStore.token !== null
  };
};

export default connect(mapStateToProps)(Layout);

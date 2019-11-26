import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Backdrop/Backdrop";

const SideDrawer = props => {
  return (
    <>
      <Backdrop show={props.open} unShow={props.handleShow} />
      <div
        className={[
          classes.SideDrawer,
          props.open ? classes.Open : classes.Close
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.MobileOnly}>
          <NavigationItems clicked={props.clicked} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;

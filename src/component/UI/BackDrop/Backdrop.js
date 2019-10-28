import React from "react";
import classes from "../BackDrop/BackDrop.module.css";

const Backdrop = props => {
  return props.open ? (
    <div onClick={props.close} className={classes.Backdrop} />
  ) : null;
};

export default Backdrop;

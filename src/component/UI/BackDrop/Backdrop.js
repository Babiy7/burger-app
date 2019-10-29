import React from "react";
import classes from "../Backdrop/Backdrop.module.css";

const Backdrop = props => {
  return props.show ? (
    <div onClick={props.unShow} className={classes.Backdrop} />
  ) : null;
};

export default Backdrop;

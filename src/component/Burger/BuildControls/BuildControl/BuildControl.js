import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <div className={classes.WrappingButton}>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
      </div>
    </div>
  );
};

export default BuildControl;

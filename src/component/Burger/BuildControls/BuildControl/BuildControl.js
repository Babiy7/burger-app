import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <div className={classes.WrappingButton}>
        <button className={classes.Less} onClick={props.remove}>
          Less
        </button>
        <button className={classes.More} onClick={props.add}>
          More
        </button>
      </div>
    </div>
  );
};

export default BuildControl;

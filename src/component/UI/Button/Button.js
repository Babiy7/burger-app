import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  let buttonClasses = [classes.Button, classes[props.type]];

  if (props.disabled) {
    buttonClasses.push(classes.Disabled);
  }

  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={buttonClasses.join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;

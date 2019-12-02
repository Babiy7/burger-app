import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputElement = null;

  let inputClasses = [classes.InputElement];
  let errorMessage;

  if (props.invalid && props.configuration.touched) {
    inputClasses.push(classes.Invalid);
    errorMessage = (
      <p style={{ color: "#ff6161", margin: "5px 0 0 0", fontSize: "12px" }}>
        {props.configuration.errorMessage}
      </p>
    );
  }

  switch (props.configuration.elementType) {
    case "input": {
      inputElement = (
        <>
          <input
            className={inputClasses.join(" ")}
            onChange={props.changed}
            {...props.configuration.elementConfig}
          />
          {errorMessage}
        </>
      );
      break;
    }
    case "text-area": {
      inputElement = <textarea className={classes.TextArea} {...props} />;
      break;
    }
    case "select": {
      inputElement = (
        <select onChange={props.changed} className={classes.Select} {...props}>
          {props.configuration.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    }
    default: {
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.configuration.elementConfig}
        />
      );
    }
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;

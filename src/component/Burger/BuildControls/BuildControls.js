import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  console.log(props.purchasable);
  return (
    <div className={classes.BuildControls}>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => props.addedIngredients(control.type)}
          remove={() => props.removedIngredients(control.type)}
        />
      ))}

      <button className={classes.OrderButton} disabled={!props.purchasable}>
        Order now
      </button>
    </div>
  );
};

export default BuildControls;

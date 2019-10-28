import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/Backdrop";

const Modal = props => {
  return (
    <>
      <BackDrop open={props.open} close={props.close} />
      <div
        className={classes.Modal}
        style={{
          // transform: props.open ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.open ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;

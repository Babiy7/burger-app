import React from "react";
import lock from "../../assets/images/lock-burger.png";

const Lock = props => {
  return (
    <img
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%"
      }}
      src={lock}
      alt="lock"
    />
  );
};

export default Lock;

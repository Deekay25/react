import React from "react";
import classes from "./Button.module.css";
function Button(props) {
  return (
    <button
      className={classes.button}
      //   'button' here is a fallback incase props.type did not work
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

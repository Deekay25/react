import React from "react";
import "./DynamicStyles_Ex11.css";
// don't change the Component name "App"
export default function DynamicStyles() {
  const [toggle, setToggle] = React.useState(false);
  const clickHandler = () => {
    // Important: Here, the setHighlighted() state updating
    //  function uses a function to set the new state - 
    //  this is done to follow the common best practice of using such 
    //  a function if the new state is based on the previous state. Here, 
    //  the new state is the opposite of the old state 
    //  (!isHighlighted sets true to false and vice versa).
    setToggle(isToggled => !isToggled);
  };
  return (
    <div>
      <p style={{ color: toggle ? "red" : "white" }}>Style me!</p>
      <button onClick={clickHandler}>Toggle style</button>
    </div>
  );
}

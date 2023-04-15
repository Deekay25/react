import React from "react";

import "./Counter.css";

// don't change the Component name "App"
export default function Counter() {
    let [counter,setCounter] = React.useState(0);
    
   
    const countHandler = () => {
        //best to do it since it depends on another thing
        setCounter(prevCount => prevCount + 1)
        // setCounter(counter + 1)
        // console.log(counter)
    } 
  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
}

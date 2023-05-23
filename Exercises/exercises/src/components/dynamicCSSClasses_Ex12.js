import React from "react";
import './dynamicCSSClasses_Ex12.css'
// don't change the Component name "App"
export default function DynamicCSSClasses() {
    const [isValid, setIsValid] = React.useState(false);

    const clickHandler = () => {
        setIsValid(toggle => !toggle)
    }
  return (
    <div>
      <p className={`${isValid ? 'active': ''}`}>Style me!</p>
      <button onClick={clickHandler}>Toggle style</button>
    </div>
  );
}

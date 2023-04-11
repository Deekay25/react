import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
// you name the function as the file name by convetion
function ExpenseItems(props) {
  //useState is a react hook
  //it must be used inside of a function component not nested function
  // use State returns an array, 1st value is the variable itself
  // 2nd value is the updating function
  // title points at props.title current state value
  // function setTitle updates title (they are been desstructured).
  const [title, setTitle] = useState(props.t);
  // by convention when your functions ends with handler it meaans
  // the function executes when an event is triggered
  const clickHandler = () => {
    setTitle("updated!");
    // below works but this is not how react pass events
    // it only makes the event triggered once and that's it
    // const title = 'Updated'
    console.log(title);
  };
  // turned into a new component called expense date
  // const month = props.d.toLocaleString('en-US', { month: 'long' })
  // const day = props.d.toLocaleString('en-US', { day: '2-digit' })
  // const year = props.d.getFullYear();
  return (
    <Card className="expense-item">
      <ExpenseDate d={props.d} />
      <div className="expense-item__description">
        {/* the title here comes from the desstructured useState array */}
        {/* this is because title now points at props.t */}
        <h2>{title}</h2>
        {/* <h2>{props.t}</h2> */}
        <div className="expense-item__price">${props.a}</div>
      </div>
      {/* when a function is with () it means it will be executed as soon as the page loads */}
      {/* but when it is without () as seen below it means it won't be executed until called upon */}
      {/* so basically we point at the function clickHandler but not execute it */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;

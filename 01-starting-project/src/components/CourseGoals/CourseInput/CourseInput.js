import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  // const [isValid, setIsvalid] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    console.log(setEnteredValue(event.target.value));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check if the user entred a value
    if (enteredValue.trim().length === 0) {
      // setIsvalid(false);
      return;
    }
    console.log(props.onAddGoal(enteredValue));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

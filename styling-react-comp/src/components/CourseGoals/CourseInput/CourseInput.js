import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import styled from "styled-components";
// import "./CourseInput.css";
import styles from './CourseInput.module.css'

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //this will remove the inline style when user starts typing
    // or when there is a keystroke
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check if user input is empty
    // do not execute anything after return
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // ############################################
  // using styled component package
  // ############################################
  // const FormControl = styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //     color: ${(props) => (props.invalid ? "red" : "black")};
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     // border: 1px solid #ccc;
  //     // using styled-component prop method
  //     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
  //     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }

  //   // &.invalid input {
  //   //   background-color: red;
  //   //   border-color: #ffd7d7;
  //   // }

  //   // &.invalid label {
  //   //   color: red;
  //   // }
  // `;
  return (
    // #########################################
    // form with inline css example
    // #########################################

    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{ color: !isValid ? "red" : "black" }}>
    //       Course Goals
    //     </label>
    //     <input
    //       style={{
    //         borderColor: !isValid ? "red" : "black",
    //         background: !isValid ? "salmon" : "transparent",
    //       }}
    //       type="text"
    //       onChange={goalInputChangeHandler}
    //     />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // #########################################
    // using external css (global)
    // #########################################
    //     <form onSubmit={formSubmitHandler}>
    //       <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
    //         <label>Course Goals</label>
    //         <input type="text" onChange={goalInputChangeHandler} />
    //       </div>
    //       <Button type="submit">Add Goal</Button>
    //     </form>
    //   );
    // };

    // #########################################
    // using styled-components package to scope
    // #########################################
    //     <form onSubmit={formSubmitHandler}>
    //       <FormControl className={!isValid && 'invalid'}>
    //         <label>Course Goals</label>
    //         <input type="text" onChange={goalInputChangeHandler} />
    //       </FormControl>
    //       <Button type="submit">Add Goal</Button>
    //     </form>
    //   );
    // };

    // #########################################
    // using feature provided by styled-components
    // #########################################
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invalid={!isValid}>
//         <label>Course Goals</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

  //  #########################################
  //   using CSS module
  //   #########################################
        <form onSubmit={formSubmitHandler}>
          {/* we use squarebrackets because our class name has '-' */}
          {/* alternatively without '-' we will use style.formcontrol */}
          <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
            <label>Course Goals</label>
            <input type="text" onChange={goalInputChangeHandler} />
          </div>
          <Button type="submit">Add Goal</Button>
        </form>
      );
    };

export default CourseInput;

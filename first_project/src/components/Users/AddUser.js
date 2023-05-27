// component use in Fetching user details
import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const [error, setError] = useState();
  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
  //     setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid name and age (non-empty values)",
  //     });
  //     return;
  //   }
  //   // the plus sign converts the string to a number
  //   if (+enteredAge < 1) {
  //     setError({
  //       title: "Invalid age",
  //       message: "Please enter a valid age (> 0)",
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredUsername, enteredAge); //lifting the state up
  //   // below the input values are cleared when we submit the form
  //   //  console.log(enteredUsername, enteredAge);
  //   setEnteredUsername("");
  //   setEnteredAge("");
  // };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  // const errorHandler = () => {
  //   setError(null);
  // };

  // return (
  //   <Wrapper>
  //     {/* <ErrorModal title="An error occured" message="Something went wrong" /> */}
  //     {error && (
  //       <ErrorModal
  //         title={error.title}
  //         message={error.message}
  //         onConfirm={errorHandler}
  //       />
  //     )}
  //     <Card className={classes.input}>
  //       <form onSubmit={addUserHandler}>
  //         <label htmlFor="username">Username</label>
  //         {/* value here ensures your input points to an empty string  after you clear it */}
  //         <input
  //           id="username"
  //           type="text"
  //           value={enteredUsername}
  //           onChange={usernameChangeHandler}
  //           ref = {nameInputRef}
  //         />
  //         <label htmlFor="age">Age (Years)</label>
  //         <input
  //           id="age"
  //           type="number"
  //           value={enteredAge}
  //           onChange={ageChangeHandler}
  //         />
  //         <Button type="submit">Add User</Button>
  //       </form>
  //     </Card>
  //   </Wrapper>
  // );
  // ###############################################################
  // using useRef on your input
  // ###############################################################
  // useRef is an object it's undefined before it's being connected
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef)
    // you got .current.value from the console
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // the plus sign converts the string to a number
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge); //lifting the state up
    // below the input values are cleared when we submit the form
    //  console.log(enteredUsername, enteredAge);
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = ''; // this method is usually discouraged using ref
    ageInputRef.current.value = ''; // try not to use ref to manipulate the Dom
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {/* <ErrorModal title="An error occured" message="Something went wrong" /> */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* value here ensures your input points to an empty string  after you clear it */}
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;

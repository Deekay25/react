import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // #############################
  // useEffect(() => {
  //      setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   ); // below are the dependencies on the useEffect function
  //   // it means if either of the three arguments is true, run the function above
  //   // we use useEffect to rerun logic when some data changes
  // },[enteredEmail,enteredPassword]);
  // // },[setFormIsValid,enteredEmail,enteredPassword]);

  // ###################################
  // debouncing technique
  // ###################################
  // we use the settimeout here to avoid listening to every key stroke
  // instead we set a particular timer to listen to when a user stops typing
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity')
       setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
       }, 500);
      //  below is called a clean up function
      //  it runs before the sideeffect function excpet  the first time
       return (() => {
        console.log('clean up')
        //cleartimeout is from the browser
        clearTimeout(identifier)
       });
      // below are the dependencies on the useEffect function
    // it means if either of the three arguments is true, run the function above
    // we use useEffect to rerun logic when some data changes
  },[enteredEmail,enteredPassword]);
  // },[setFormIsValid,enteredEmail,enteredPassword]);


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

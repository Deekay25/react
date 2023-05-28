import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// #############################################################
// using useState
// #############################################################

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   // #############################
//   // useEffect(() => {
//   //      setFormIsValid(
//   //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
//   //   ); // below are the dependencies on the useEffect function
//   //   // it means if either of the three arguments is true, run the function above
//   //   // we use useEffect to rerun logic when some data changes
//   // },[enteredEmail,enteredPassword]);
//   // // },[setFormIsValid,enteredEmail,enteredPassword]);

//   // ###################################
//   // debouncing technique
//   // ###################################
//   // we use the settimeout here to avoid listening to every key stroke
//   // instead we set a particular timer to listen to when a user stops typing
//   useEffect(() => {
//     const identifier = setTimeout(() => {
//       console.log("checking form validity");
//       setFormIsValid(
//         enteredEmail.includes("@") && enteredPassword.trim().length > 6
//       );
//     }, 500);
//     //  below is called a clean up function
//     //  it runs before the sideeffect function excpet  the first time
//     return () => {
//       console.log("clean up");
//       //cleartimeout is from the browser
//       clearTimeout(identifier);
//     };
//     // below are the dependencies on the useEffect function
//     // it means if either of the three arguments is true, run the function above
//     // we use useEffect to rerun logic when some data changes
//   }, [enteredEmail, enteredPassword]);
//   // },[setFormIsValid,enteredEmail,enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.includes('@') && enteredPassword.trim().length > 6
//     // );
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
//     // );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// #########################################################################################################
// using useReducer
// #############################################################

// the use Redecer function is created outside the Login function scope
// because it will passed down by react automatically when it's executed
// state argument here is our last state
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_CHECK") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // usereducer returns an array with exactly two funcitons
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // ###################
  // not so important
  // useEffect(() => {
  //   console.log("Effect Running");
  //   return () => {
  //     console.log("Effect Clean up");
  //   };
  // }, []);

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

  // we destructured from the emailState and passwordState
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(
        // emailState.isValid && passwordState.isValid
        emailIsValid && passwordIsValid
      );
    }, 500);
    //  below is called a clean up function
    //  it runs before the sideeffect function excpet  the first time
    return () => {
      console.log("clean up");
      //cleartimeout is from the browser
      clearTimeout(identifier);
    };
    // below are the dependencies on the useEffect function
    // it means if either of the three arguments is true, run the function above
    // we use useEffect to rerun logic when some data changes
  }, [emailIsValid, passwordIsValid]);
  // }, [emailState, passwordState]);
  // },[setFormIsValid,enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    // the dispatchEmail function can be a string, a number or an object etc
    // but by convention usually an object is being passed
    // type by convention is usally on all caps
    // the val key is usually optional
    // since we want to save what the user has entered so we add some payload
    // below is the dispatchEmail Action
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    //  ##########################
    // we use Usestate now instead of below
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });

    //  ##########################
    // we use useState now instead of below
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // on this dispatch function there is no extra data
    // because we are not saving any data
    dispatchEmail({ type: "INPUT_BLUR" });
    // ###########################################
    // setEmailIsValid(emailState.value.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_CHECK" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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

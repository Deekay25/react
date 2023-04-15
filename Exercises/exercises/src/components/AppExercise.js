// import React from "react";
// import "./App.css";

// // don't change the Component name "App"
// export default function AppExercise() {
//   const [message,setMessage]= React.useState('Invalid message')
//   const messageChangeHandler = (event) => {
//     const value = event.target.value
//    if (value.length < 3) {
//      // Todo: Update state to say "Invalid"
//      setMessage('Invalid message')
//    } else {
//     setMessage('Valid message')
//      // Todo: Update state to say "Valid"
//    }
//   }
//   return (
//     <form>
//       <label>Your message</label>
//       <input type="text" onChange={messageChangeHandler}/>
//       <p>{message}</p>
//     </form>
//   );
// }


// ##########################################################
// maxi solution
// ##########################################################

import React from "react";
import "./App.css";

// don't change the Component name "App"
export default function AppExercise() {
  const [message,setMessage]= React.useState('Invalid')
  const messageChangeHandler = (event) => {
    const value = event.target.value
   if (value.length < 3) {
     // Todo: Update state to say "Invalid"
     setMessage('Invalid')
   } else {
    setMessage('Valid')
     // Todo: Update state to say "Valid"
   }
  }
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={messageChangeHandler}/>
      <p>{message} message</p>
    </form>
  );
}

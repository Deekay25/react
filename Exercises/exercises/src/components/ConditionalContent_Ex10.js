import React, { useState } from "react";
import "./ConditionalContent_Ex10.css";

// don't change the Component name "App"
export default function CondCon() {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const btnDeleteHandler = () => {
    setIsDeleting(true);
  }
  const proceedHandler = () => {
    setIsDeleting(false);
  }

  let warning;
  if (isDeleting) {
    warning = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    );
  }
  return (
    <div>
        {/* ############################################### */}
        {/* using turnary operator */}
      {/* {isDeleting ? <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div> : ' '} */}
      {/* <button onClick={btnDeleteHandler}>Delete</button> */}
      
      {/* ############################################### */}
      {/* using js trick */}
      {/* {isDeleting && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      )} */}
{/* ############################################### */}
      {/* using a variable */}
      {warning}

      <button onClick={btnDeleteHandler}>Delete</button>
    </div>
  );
}
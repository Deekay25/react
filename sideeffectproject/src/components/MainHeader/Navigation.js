import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

// we used useContext so much that we have to remove props argument
const Navigation = () => {
  // return (
  //   // ########################################
  //   // using authContect.consumer
  //   // ########################################
  //   <AuthContext.Consumer>
  //     {/* // the consumer takes a child function */}
  //     {(ctx) => {
  //       return (
  //         <nav className={classes.nav}>
  //           <ul>
  //             {/* {props.isLoggedIn && ( */}
  //             {/* access to .isLoggedIn came from auth-conext.js */}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Users</a>
  //               </li>
  //             )}
  //             {/* {props.isLoggedIn && ( */}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <a href="/">Admin</a>
  //               </li>
  //             )}
  //             {/* {props.isLoggedIn && ( */}
  //             {ctx.isLoggedIn && (
  //               <li>
  //                 <button onClick={props.onLogout}>Logout</button>
  //               </li>
  //             )}
  //           </ul>
  //         </nav>
  //       );
  //     }}
  //   </AuthContext.Consumer>
  // );

  // ########################################
  // using useContext() hook
  // ########################################
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {/* {props.isLoggedIn && ( */}
        {/* access to .isLoggedIn came from auth-conext.js */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            {/* <button onClick={props.onLogout}>Logout</button> */}
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

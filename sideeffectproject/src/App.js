import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const storedLoggedInUserInformation = localStorage.getItem("isLoggedIn");
  // below will cause in infinite loop if not wrapped in an useffect
  // if (storedLoggedInUserInformation === '1') {
  //   setIsLoggedIn(true);
  // }
  // useEffect has two arguments
  // 1. a function
  // 2. an array of dependencies
  useEffect(() => {
    const storedLoggedInUserInformation = localStorage.getItem("isLoggedIn");
    if (storedLoggedInUserInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //local storage comes from the browser
    // you can confirm it from the applications tab
    // isLoggedIn and 1 values can be anything but a string
    // this means that if log in is true then represent as 1
    // it is a key-value pair
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

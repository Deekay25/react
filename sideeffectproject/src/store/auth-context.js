import React from 'react';

//authcontext is not a component but an object that has a component
// create context takes a default context often an object
// to use context you need to provide it and consume it
// when you have a default value you don't need the provider
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
})

export default AuthContext;
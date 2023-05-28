import React from 'react';

//authcontext is not a component but an object that has a component

const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext;
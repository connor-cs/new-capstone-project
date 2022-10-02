import React from "react";
import { useContext, createContext } from "react";
import { useState } from "react";
import { useMemo } from "react";

export const LoginContext = createContext()

  export const LoggedInProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
            {props.children}
        </LoginContext.Provider>
    )
 }


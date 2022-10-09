import React from "react";
import { useState, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";
import {LoginContext} from "./LoggedInContext"
import LoginForm from "./LoginForm";
import LogoutButton from "./HelperActions/LogoutButton";


export default function Login() {

  const {setLoggedIn, loggedIn} = useContext(LoginContext)

  // console.log(LoginContext == true)
  
  return (
    
    <main className="login-page">
      
      {loggedIn ? <LogoutButton /> : <LoginForm />}
      
      {/* {signedIn? "TEST you are signed in" : " TEST signin now"} */}
      {/* {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null} */}
    </main>

  );
}

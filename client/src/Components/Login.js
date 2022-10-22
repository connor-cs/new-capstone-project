import React from "react";
import { useState, createContext, useContext } from "react";
import { LoginContext } from "./LoggedInContext";
import LoginForm from "./LoginForm";
import LogoutButton from "./HelperActions/LogoutButton";

export default function Login() {
  const { setLoggedIn, loggedIn } = useContext(LoginContext);


  return (
    <main className="login-page">
      {loggedIn ? <LogoutButton /> : <LoginForm />}
    </main>
  );
}

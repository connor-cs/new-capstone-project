import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./LoggedInContext";
import Button from '@mui/material/Button';

export default function Signup() {
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setLoggedIn, user, setUser } = useContext(LoginContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
        setLoggedIn(true);
        navigate("/");
      } else {
        res
          .json()
          .then((data) => setErrors([...data.errors]))
          .then(console.log(errors));
      }
    });
  }

  return (
    <main className="signup-page">
      <div className="signup-form">
        <form onSubmit={handleSubmit} >
          <label>Username: </label>
          <input
          className="text-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Password: </label>
          <input
          className="text-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <Button variant="outlined" type="submit">Signup</Button>
        </form>
      </div>
      {errors ? errors : null}
    </main>
  );
}

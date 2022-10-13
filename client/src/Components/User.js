import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoggedInContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from '@mui/icons-material/UpgradeRounded';
import TrailCard from "./TrailCard";

export default function User() {
  const { loggedIn, setLoggedIn, user, setUser } = useContext(LoginContext);
  const [errors, setErrors] = useState([]);
  const [userFavs, setUserFavs] = useState([]);
  const [userData, setUserData] = useState("");
  const [update, setUpdate] = useState(false)
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  console.log("user id:", id);

  //state for update
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    //GET to users
    fetch(`/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    // .then(res=>console.log("username", res.username))
    // .then(data=>(console.log("username", data.username)))
    // .then(data =>console.log(data))
  }, []);

  //GET to favorites
  useEffect(() => {
    fetch("/favorites")
    .then((res) => {
      if (res.ok) {
        res.json()
        //this is FINALLY working but it doesn't include any data
        // .then((data) => console.log('favdata', data))
        .then(data => setUserFavs(data))
        .then(console.log(userFavs))
      } else {
        res.json().then((errors) => setErrors([errors.error]));
      }
    });
  },[]);

  function handleDeleteClick() {
    //DELETE to user
    fetch(`/user/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then(setLoggedIn(false))
          .then(setUser(null))
          .then(navigate("/"));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }

  function handleUpdateSubmit(e) {
    //PATCH to user
    e.preventDefault();
    fetch(`/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => console.log(data));
        setLoggedIn(true);
        navigate("/explore");
      } else {
        res
          .json()
          .then((errors) => setErrors([...errors.error]))
          .then(console.log(errors));
      }
    });
  }

  return (
    <div className="user-container">
      <h2>Welcome {userData.username} </h2>
      {/* <button onClick={handleDeleteClick}>Delete account</button> */}
      <Button
        onClick={handleDeleteClick}
        variant="outlined"
        size="small"
        fontSize="small"
        startIcon={<DeleteIcon />}
      >
        Delete Account
      </Button>

      <Button
        onClick={()=>setUpdate(!update)}
        variant="outlined"
        size="small"
        fontSize="small"
        startIcon={<UpgradeIcon />}
      >
        Update Account Info
      </Button>

      {update ? <div className="update-form">
        <form onSubmit={handleUpdateSubmit}>
          <label>Enter new username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Enter new password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Update</button>
        </form>
      </div> : null}

      {errors ? <div>errors: {errors}</div> : null}

      <div>
        {userFavs.map(fav => {
          console.log("fav", fav)
        return <TrailCard key={fav.id} trail={fav} />
      })}
      </div>
    </div>
  );
}

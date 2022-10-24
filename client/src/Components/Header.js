import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "./LoggedInContext";
import User from "./User";

import HikingIcon from "@mui/icons-material/Hiking";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const { loggedIn, user } = useContext(LoginContext);
  console.log("from header", loggedIn);

  return (
    // <header className='header-bar'>
    //     <NavLink to="/about">About</NavLink>
    //     <NavLink to="/explore">Explore</NavLink>
    //     <NavLink to="/">Good Hikes</NavLink>
    //     <NavLink to="/login">{loggedIn ? "Logout" : "Login"}</NavLink>
    //     {loggedIn ? <NavLink to={`/account/${user.id}`}> Account</NavLink> : <NavLink to="/signup">Signup</NavLink>}

    // </header>
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </Button>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">
                <Link to="/explore" style={{ textDecoration: "none" }}>
                  Explore
                </Link>
              </Button>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button variant="Outlined" color="inherit">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Good<HikingIcon/>Hikes
                </Link>
              </Button>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {loggedIn ? "Logout" : "Login"}
                </Link>
              </Button>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button variant="Outlined" color="inherit">
                {loggedIn ? (<Link to={`/account/${user.id}`} style={{ textDecoration: "none" }}> Account</Link>) : (<Link to="/signup" style={{ textDecoration: "none" }}>Signup</Link>)}
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

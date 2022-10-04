import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import {LoginContext} from './LoggedInContext'
import User from './User'



export default function Header() {
    
    const {loggedIn} = useContext(LoginContext)
    console.log('from header', loggedIn)
    return (
        <header className='header-bar'>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/">Good Hikes</NavLink>
            <NavLink to="/login">{loggedIn ? "Logout" : "Login"}</NavLink>
            {loggedIn ? <NavLink to="/account/:id">Account</NavLink> : <NavLink to="/signup">Signup</NavLink>}
            
        </header>
    )
}

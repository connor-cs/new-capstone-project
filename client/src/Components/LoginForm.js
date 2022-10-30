import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from './LoggedInContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';


export default function LoginForm() {



    const [errors, setErrors] = useState([])
    const [formData, setformData] = useState({
      username: "",
      password: "",
    });
    const { username, password } = formData
    
    const navigate = useNavigate()
    const {setLoggedIn, loggedIn, user, setUser} = useContext(LoginContext)
    
    
    function handleChange(e) {
      setformData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      const user = {
        username, password
      }
      console.log(user)
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data=>setUser(data))
        
        //change signed in context here, then redirect to explore page
        .then(()=>setLoggedIn(!loggedIn))
        .then(()=>console.log('logged in status:', loggedIn))
        .then(navigate('/explore'))
        
        .catch(error => setErrors(error))
        .then(console.log("errors", errors))
    }

    return (
        
        <>
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input className= "text-input" type="text" name="username" value={username} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <label>Password: </label>
                    <input className="text-input" type="password" name="password" value={password} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
            </div>
        </>
    
    )
}

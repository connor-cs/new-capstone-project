import React from 'react'
import { LoginContext } from '../LoggedInContext'
import { useContext } from 'react'
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogoutButton() {

    const { setLoggedIn } = useContext(LoginContext)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
            //then update context
            .then(setLoggedIn(false))
    }



    return (
        <div className='logout-button'>
            <Button variant="contained" onClick={handleLogout} startIcon={<LogoutIcon />}>Logout </Button>
        </div>
    )
}

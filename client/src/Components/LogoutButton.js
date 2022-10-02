import React from 'react'
import { LoginContext } from './LoggedInContext'
import { useContext } from 'react'

export default function LogoutButton() {
    
    const {setLoggedIn} = useContext(LoginContext)

    function handleLogout () {
        fetch('/logout', {
            method: "DELETE"
        })
        //then update context
        .then(setLoggedIn(false))
    }
    
    
    
    return (
        <div className='logout-button'>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

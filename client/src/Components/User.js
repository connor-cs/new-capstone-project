import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LoginContext } from './LoggedInContext'

export default function User() {

  const { loggedIn, setLoggedIn, user, setUser } = useContext(LoginContext)
  const [errors, setErrors] = useState([])
  const [userFavs, setUserFavs] = useState([])
  const [userData, setUserData] = useState("")
  const navigate = useNavigate()
  const params = useParams()
  const { id } = params
  console.log("user id:", id)

  //state for update
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")


  useEffect(() => {
    //GET to user
    fetch(`/user/${id}`)
      .then(res => res.json())
      .then(data => setUserData(data))
    // .then(res=>console.log("username", res.username))
    // .then(data=>(console.log("username", data.username)))
    // .then(data =>console.log(data))
  }, [])

  function handleDeleteClick() {
    //DELETE to user
    fetch(`/user/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(setLoggedIn(false))
            .then(setUser(null))
            .then(navigate('/'))
        }
        else {
          res.json()
            .then(data => setErrors(data.error))
        }
      })
  }


  function handleUpdateSubmit(e) {
    //PATCH to user
    e.preventDefault()
    fetch(`/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok) {
          res.json()
           setLoggedIn(true)
        //   navigate('/explore')
        }
        else {
          res.json()
            .then(errors => setErrors([...errors.error]))
            .then(console.log(errors))
        }
      })
  }

  return (
    <div className='user-container'>
      <h2>Welcome {userData.username} </h2>
      <button onClick={handleDeleteClick}>Delete account</button>
      
      <div className='update-form'>
        <form onSubmit={handleUpdateSubmit}>
        <label>Enter new username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <label>Enter new password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit">Update</button>
      </form>
    </div>
      
      {errors ? <div>errors: {errors}</div> : null}
    </div>

    //render user favorites
  )
}

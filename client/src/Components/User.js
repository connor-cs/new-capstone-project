import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoginContext } from './LoggedInContext'

export default function User() {

  const {loggedIn, setLoggedIn} = useContext(LoginContext)
  const [errors, setErrors] = useState([])
  const [userFavs, setUserFavs] = useState([])
  const [userData, setUserData] = useState("")
  const params = useParams()
  const {id} = params
  console.log("user id:", id)
  
  
  useEffect(()=>{
    //GET to user
    fetch(`/user/${id}`)
      .then(res=>res.json())
      .then(data=>setUserData(data))
      // .then(res=>console.log("username", res.username))
      // .then(data=>(console.log("username", data.username)))
      // .then(data =>console.log(data))
  },[])

  function handleDeleteClick(){
    //DELETE to user
    fetch(`/user/${id}`,{
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
    })
      .then(res=> {
        if (res.ok){
          res.json()
          .then(setLoggedIn(false))
        }
        else {
          console.log('error')
          res.json()
          .then(data=>setErrors(data.error))
        }
      })
  }

  return (
    <div className='user-container'>
      <h2>Welcome {userData.username} </h2>
      <button onClick={handleDeleteClick}>Delete account</button>
      {errors ? <div>{errors}</div> : null}
    </div>

    //render user favorites
  )
}

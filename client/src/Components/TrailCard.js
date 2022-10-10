import React from 'react'
import { useContext, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LoginContext } from './LoggedInContext';

export default function TrailCard({trail}) {
  
  const [errors, setErrors] = useState([])
  const {loggedIn, user} = useContext(LoginContext)
  const newFav = {
    trail_id: trail.id,
    user_id: user.id
  }

  function handleFavClick(){
    console.log('newfav:', newFav)
    fetch('/favorites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFav)
    })
    .then(res=> {
      if (res.ok) {
        res.json()
        .then(data=>{
          console.log('data: ', data)
        })
      }
      else {
        res.json()
        .then(errors=>setErrors([...errors.error]))
      }
    })
  }

  
  
  return (
    
    
    <div key={trail.id} className={"trailcard"}>
      <h2>{trail.name}</h2>
      <p>Length: {trail.length} miles</p>
      <p>{trail.description}</p>
      <p>Location: {trail.directions}</p>
      <p>{trail.city} {trail.state}</p>
      {loggedIn ? <FavoriteBorderIcon onClick={handleFavClick}/> : null}
    </div>
  )
}

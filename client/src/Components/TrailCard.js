import React from 'react'

export default function TrailCard({trail}) {
  
  function handleClick(){
    
  }

  console.log(trail)
  
  return (
    
    
    <div key={trail.id} className={"trailcard"}>
      <h2>{trail.name}</h2>
      <p>Length: {trail.length} miles</p>
      <p>{trail.description}</p>
      <p>Location: {trail.directions}</p>
      <p>{trail.city} {trail.state}</p>
      <button onClick={handleClick}>♥</button>
    </div>
  )
}

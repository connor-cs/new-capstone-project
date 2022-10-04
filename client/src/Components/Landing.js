import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  
  const navigate = useNavigate()
  
  return (
    <>
      <main className='landing-page'>
        <div className='welcome-message'>
          <h2>Welcome to Good Hikes</h2>
          <button className='explore-btn' onClick={()=>navigate('/explore')}>Explore trails</button>
        </div>
      </main>
      <p>2022 Connor Cyphers</p>
    </>
  )
}
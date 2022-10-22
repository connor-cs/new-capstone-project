import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Landing() {

  const navigate = useNavigate()

  return (
    <>
      <main className='landing-page'>
        <div className='welcome-message'>
          <h2>Welcome to Good Hikes</h2>
          <Button variant="outlined" onClick={() => navigate('/explore')}>Explore trails</Button>
        </div>
      </main>
      <p>2022 Connor Cyphers</p>
    </>
  )
}
import React from 'react'

export default function About() {
  return (
    <main className='about-page'>
      <div className='about-div'>
        <p>This app allows you to search for hiking trails near you by searching your city and state.
          The data includes the name, a brief description, the length and the location.</p>

        <ul>The technologies used to build this app include:</ul>
        <li>A front-end built with React with a Google Maps integration</li>
        <li>Bootstrap and Material UI</li>
        <li>The back-end was built with Ruby on Rails</li>
        <li>Background images were sourced from Unsplash</li>
        <li>The data comes from TrailAPI</li>
      </div>
    </main>
  )
}

import React from 'react'

export default function About() {
  return (
    <main className='about-page'>
      <div className='about-div'>
        <div className='about-text'>
        <h3 className='black-text'>About</h3>
        <p>This app allows you to search for hiking trails near you by searching your city and state.
          The results include the name, a brief description, the length, and the location plotted on Google Maps.</p>
          <br></br>
        <h4 className='black-text'><ul>The technologies used include:</ul></h4>
        <li>A front-end built with React with a Google Maps integration</li>
        <li>Bootstrap and Material UI</li>
        <li>A back-end built with Ruby on Rails</li>
        <li>Background images were sourced from Unsplash</li>
        <li>The data comes from TrailAPI</li>
        <br></br>
        <h4 className='black-text'><ul>A user can:</ul></h4>
        <li>Signup for an account and login/logout</li>
        <li>Search for trails by city and state</li>
        <li>Add a trail to their list of favorites</li>
        </div>
      </div>
    </main>
  )
}

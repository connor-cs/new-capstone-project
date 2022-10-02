import '../App.css';
import React from 'react'
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import User from './User';
import About from './About';
import Explore from './Explore';
import { Routes, Route } from 'react-router-dom'
import { useState} from 'react'
import { useContext} from 'react';
import {LoggedInProvider} from './LoggedInContext';
import { LoginContext } from './LoggedInContext';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function App() {
  
//   const LoginContext = createContext() 
  
//   const isLoggedIn = useState({
//     loggedIn: false,
//     toggleLogin: () => {
//         console.log(this.loggedIn)
//         return !this.loggedIn}
// })
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // console.log(LoginContext)

 
  return (
    <div className='App'>
      <LoggedInProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>

          <Route exact path='/login' element={<Login />}></Route>

          <Route exact path='/signup' element={<Signup />} ></Route>
          
          
          <Route exact path='/explore' element={<Explore />}></Route>
        

          <Route exact path='/about' element={<About />}></Route>

          <Route exact path='/account' element = {<User />}></Route>

          {/* <Route exact path = '/trails' element={<TrailsContainer/>}></Route> */}

        </Routes>
      </LoggedInProvider>
    </div>
  );
}

export default App;

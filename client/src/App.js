import React from 'react'
import Header from './Components/Header';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import User from './Components/User';
import About from './Components/About';
import Explore from './Components/Explore';
import { Route, Routes } from 'react-router-dom';
import { useState} from 'react'
import { useContext} from 'react';
import {LoggedInProvider} from './Components/LoggedInContext';
import { LoginContext } from './Components/LoggedInContext';


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

          <Route path='/account/:id' element = {<User />}></Route>

          {/* <Route exact path = '/trails' element={<TrailsContainer/>}></Route> */}

        </Routes>
      </LoggedInProvider>
    </div>
  );
}

export default App;

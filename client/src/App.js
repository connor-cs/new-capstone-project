import React from 'react'
import Header from './Components/Header';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import User from './Components/User';
import About from './Components/About';
import Explore from './Components/Explore';
import { Route, Routes } from 'react-router-dom';
import {LoggedInProvider} from './Components/LoggedInContext';

function App() {

 
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


        </Routes>
      </LoggedInProvider>
    </div>
  );
}

export default App;

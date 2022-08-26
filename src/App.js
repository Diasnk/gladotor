import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useRef } from 'react';

import Footer from './pages/Course/components/Footer';
import Course from './pages/Course/Course'
import Profile from './pages/Profile/Profile'
import { List } from './pages/Course/components/List';
import Login from './pages/Login/Login';
import Reg from './pages/Register/Reg';
import Test from './pages/Test/Test';


function App (){
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Course/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/registration' element={<Reg/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
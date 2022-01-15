import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Employees from './components/employees/Employees';
import Login from './components/login/signIn/SignIn';
import SignUp from './components/login/signUp/SignUp';
import NavBar from './components/navBar/NavBar';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(user)

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('profile'))) {
      setUser(true);
    }
  },[]);


  return (
      <BrowserRouter>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" exact element={(user ? <Navigate replace to="/employees" /> : <Navigate replace to="/login" />)} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/employees" element={(user ? <Employees /> : <Navigate replace to="/login" />)} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

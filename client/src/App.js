import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Employees from './components/employees/Employees';
import Login from './components/login/signIn/SignIn';
import SignUp from './components/login/signUp/SignUp';
import NavBar from './components/navBar/NavBar';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  // const dispatch = useDispatch();
  // const userAuth = useSelector((state) => state);
  // const [user, setUser] = useState(false);
  // console.log(user);
  // //console.log(testt.auth.authData.result);

  // useEffect(() => {
  //   if(JSON.parse(localStorage.getItem('profile'))) {
  //     const localData = JSON.parse(localStorage.getItem('profile'));
  //     const result = localData.registered;
  //     const token = localData.accessToken;
  //     const displayName = localData.displayName;
  //     dispatch({ type: 'AUTH', data: { result, token, displayName } });
  //   } else {
  //     const result = false;
  //     const token = '';
  //     const displayName = '';
  //     dispatch({ type: 'AUTH', data: { result, token, displayName } });
  //   }
  // },[dispatch]);

  // useEffect(() => {
  //   if(userAuth.auth.authData){
  //     setUser(userAuth.auth.authData.result);
  //   }
  // },[userAuth]);


  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={(user ? <Navigate replace to="/employees" /> : <Navigate replace to="/login" />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/employees" element={(user ? <Employees /> : <Navigate replace to="/login" />)} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

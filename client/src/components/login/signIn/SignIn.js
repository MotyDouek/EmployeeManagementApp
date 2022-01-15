import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

import { auth } from '../FireBaseConfig';
import './SignIn.css';

const SignUp = ({ setUser }) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const login = async () => {
        try{
            signInWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                const result = userCredential._tokenResponse.registered;
                const token = userCredential.user.accessToken;
                const displayName = userCredential.user.displayName;
                dispatch({ type: 'AUTH', data: { result, token, displayName } });
                setUser(true);
            })
            .catch((error) => alert(error.message));
        }catch(error){
            alert(error.message);
            setUser(false);
        }
    }

  return (
    <div className="root">
      <div className="container">
        <div className="title">
          <h1 className="signIn">
          WELCOME BACK
          </h1>
        </div>
        <form className="form">
          <div className="login">
            <p/>
            <label className="signIn">User Name</label>
            <input className="signIn" type="text" placeholder="User name" name="userName" onChange={(e) => setUserName(e.target.value)} />
            <p/>
            <label className="signIn">Password</label>
            <input className="signIn" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div> 
          <Link to="/employees">
            <button className="signIn" onClick={login}>LOGIN</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
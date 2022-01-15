import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../FireBaseConfig';
import './SignUp.css';

const SignUp = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
		e.preventDefault();
		try{
			createUserWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => alert(error.message))
		}catch(error){
			alert(error.message)
		}
	}

  return (
    <div className="root">
      <div className="container">
        <div className="title">
          <h1 className="signUp">
          WELCOME BACK
          </h1>
        </div>
        <form className="form">
          <div className="login">
            <p/>
            <label className="signUp">User Name</label>
            <input className="signUp" type="text" placeholder="User name" name="userName" onChange={(e) => setUserName(e.target.value)} />
            <p/>
            <label className="signUp">Password</label>
            <input className="signUp" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="signUp" onClick={register}>SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = ({ user, setUser }) => {

    const dispatch = useDispatch();
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(false);
      };

    return (
        <div className="navBar">
            <h1 className="navBar">
               Employee Management App 
            </h1>
            {user && <Link to="/login"><button onClick={logout}> Sign Out </button></Link>}
        </div>
    )
};

export default NavBar
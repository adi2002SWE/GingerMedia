import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='Nav'>
        <div className='Nav-cont'>
            <NavLink to="/">Home</NavLink>
        </div>
        <div className='Nav-cont'>
            <NavLink to="/signup">SignUp</NavLink>
        </div>
        <div className='Nav-cont'>
            <NavLink to="/login">LogIn</NavLink>
        </div>
        <div className='Nav-cont'>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    </div>
  )
}

export default Navbar;
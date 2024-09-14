import React from 'react'
import "./Navbar.css";
import logo from '../../assets/logo.svg';


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <img className='logo-size' src={logo} alt=''/>
      <ul className='nav-menu'>
        <li>home</li>
        <li>about me</li>
        <li>Skills</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
      <div className='nav-connect'>Connect with Me</div>
    </div>
    </>
  )
}

export default Navbar;

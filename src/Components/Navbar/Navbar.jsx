import React, { useState,useRef } from 'react'
import "./Navbar.css";
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = () => {

  const[menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }

  return (
    <>
    <div className='navbar'>
      <img className='logo-size' src={logo} alt=''/>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>home</p></AnchorLink>{menu=="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>about me</p></AnchorLink>{menu=="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu=="skills"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>portfolio</p></AnchorLink>{menu=="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>contact</p></AnchorLink>{menu=="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    </div>
    </>
  )
}

export default Navbar;

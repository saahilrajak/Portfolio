import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  // State to toggle menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and closed
  };

  return (
    <>
      <div className='navbar'>
        <img className='logo-size' src={logo} alt='' />
        
        {/* Menu Open Icon for Mobile */}
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt=''
          className={`nav-mob-open ${menuOpen ? 'hidden' : ''}`} // Hide the open icon if menu is open
        />
        
        {/* Menu Container */}
        <ul className={`nav-menu ${menuOpen ? 'open' : 'closed'}`}>
          {/* Menu Close Icon for Mobile */}
          <img
            src={menu_close}
            onClick={toggleMenu}
            alt=''
            className='nav-mob-close'
          />
          
          <li>
            <AnchorLink className='anchor-link' href='#home'>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p onClick={() => setMenu("about")}>About me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#skills'>
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
            {menu === "skills" ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt='' /> : <></>}
          </li>
        </ul>

        {/* Connect Button */}
        <div className='nav-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import "./Hero.css";
import profileimg from "/src/assets/profileimg.jpeg/";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img' src={profileimg} alt='Profile' />
      <h1><span>I'm Sahil Rajak,</span> Full Stack Developer Based in India.</h1>
      <p>I am a full stack developer from Delhi, India, with expertise and knowledge in full stack development.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href='https://docs.google.com/document/d/18NzwbnIGWFYM2bgxHb1rIMiB4I8sf3oedFeTxFxNsvU/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
        <div className='hero-connect-socialmedia'>
          <a href="https://www.linkedin.com/in/sahilrajak" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/_sahilrajak" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/saahilrajak" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/_sahilrajak" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

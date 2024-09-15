import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile-img' src={profile_img} alt=''/>
      <h1><span>I'm Sahil Rajak,</span> Full Stack developer Based in India.</h1>
      <p>I am a full stack developer from Delhi,India with having Expertise and Knowledge in full Stack Development </p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
        
      </div>
    </div>
  )
}

export default Hero;

import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
      <img className='profile-img' src={profile_img} alt=''/>
      <h1><span>I'm Sahil Rajak,</span> Full Stack developer Based in India.</h1>
      <p>I am a full stack developer from Delhi,India with having Expertise and Knowledge in full Stack Development </p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My Resume</div>
        
      </div>
    </div>
  )
}

export default Hero;

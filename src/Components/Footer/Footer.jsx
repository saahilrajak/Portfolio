import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.jpeg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={logo} alt=''/>
            <p>Iam a Full stack developer from Delhi, India and having expertise and knowledge in Software development.</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
              <img src={user_icon} alt=''/>
              <input type='email' placeholder='Enter Your Email'></input>
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@2024 Sahil Rajak</p>
        <div className='footer-bottom-right'>
          <p>terms of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

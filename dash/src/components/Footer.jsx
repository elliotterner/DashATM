import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='wholeFooter'>
      <div className='footerContent'>
        <div className='footerCol1'>
          <h1 className='footerTitle'>Dash ATM Services</h1>
          <p>support@dashatmservices.com</p>
        </div>
        <div className='footerCol2'>
          <div className='footerLinks'>
            <h3>Our Work</h3>
            <NavLink to="about" className="HeaderLinks">About</NavLink>
          </div>
          <div className='socials'>
            <h3 className='socialsTitle'>Follow</h3>
            <a className="HeaderLinks" href="https://www.linkedin.com/company/dash-atm/about/" >LinkedIn</a>
            <p></p>
            <a className = "HeaderLinks"href="https://www.facebook.com/profile.php?id=100086326652437">Facebook</a>
            <p></p>
            
          </div>
        </div>
      </div>
      <div className='copyrightContainer'>
        <p className='copyright'>© Copyright 2022 | Dash ATM Services</p>

      </div>

    </div>
    
    )
}


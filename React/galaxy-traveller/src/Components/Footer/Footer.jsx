import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='footer'>
      <Link to={'/'}> <h1>GLX TRV</h1> </Link>
      <div className="link-container">
        <h2>Useful Links</h2>
        <div className="links">
          <Link to={'/'}>Home</Link>
          <Link to={'/pricing'}>Pricing</Link>
          <Link to={'/training'}>Training</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
      <div className="social-media-icons">
        <FaFacebook size={40} />
        <FaInstagram size={40} />
        <FaXTwitter size={40} />
      </div>
    </div>
  )
}

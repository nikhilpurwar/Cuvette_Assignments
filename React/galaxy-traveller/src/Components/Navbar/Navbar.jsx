import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa'
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }

  return (
    <>
      <nav>
        <div className="logo">
          <Link to={'home'}> <h1>GLX TRV</h1> </Link>
        </div>
        <div className= {click ? 'active' : 'menu'}>
          <Link to={'/'}>Home</Link>
          <Link to={'/pricing'}>Pricing</Link>
          <Link to={'/training'}>Training</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {
            click ? (<FaTimes style= {{color:'white'}} size = {30}/>) :  <FaBars style= {{color:'white'}} size = {30}/>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
export const Home = () => {
  return (
    <>
    <div className='header'>
      <Link to= "/"><h2>Home</h2></Link>
      <nav>
        <Link to= "/about"><h3>About</h3></Link>
        <Link to= "/contact"><h3>Contact</h3></Link>
        <Link to= "/signup"><h3>Sign Up</h3></Link>
      </nav>
    </div>
    </>
    

  )
}

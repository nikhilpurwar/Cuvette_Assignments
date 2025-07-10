import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <Link to="/"><h2>Home</h2></Link>
        </div>
        <nav>
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/contact"><h3>Contact</h3></Link>
          <Link to="/signup"><h3>Sign Up</h3></Link>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

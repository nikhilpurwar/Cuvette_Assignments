import './App.css';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Home />
          <About />
          <Contact />
        </Routes>
      </Router>
    </>
  );
}

export default App;

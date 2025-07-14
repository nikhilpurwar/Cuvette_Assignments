import './App.css';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { SignUp } from './Pages/SignUp';
import { Header } from './Pages/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

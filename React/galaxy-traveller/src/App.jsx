import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Pricing } from './Pages/Pricing/Pricing'
import { Training } from './Pages/Training/Training'
import { Contact } from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import {Footer} from './Components/Footer/Footer'
function App() {

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/training' element={<Training />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

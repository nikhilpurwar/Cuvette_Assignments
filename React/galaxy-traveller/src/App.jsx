import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Pricing } from './Pages/Pricing/Pricing'
import { Training } from './Pages/Training/Training'
import { Contact } from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
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
    </Router>
  )
}

export default App

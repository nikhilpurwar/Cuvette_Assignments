
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = ()=>{
    
  }

  return (
    <>
      <form action="">
        <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange}/>
        <input type="text" placeholder='Name' name='email' value={user.email} onChange={handleChange}/>
        <input type="text" placeholder='Name' name='phone' value={user.phone} onChange={handleChange}/>
      </form>
    </>
  )
}

export default App

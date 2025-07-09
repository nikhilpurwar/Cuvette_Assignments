import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home title="Home" message="Welcome to the Home Page" />
      <About />
      <Contact />
    </div>
  );
}

export default App;

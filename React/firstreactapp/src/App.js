import './App.css';
import Component1 from './Component/component1';
function App() {

  let count = 0;
  function handleCount() {
    console.log(++count);
    document.querySelector('h5').innerText = `Count: ${count}`;
    document.querySelector('h5').style.color = count % 2 === 0 ? 'blue' : 'red';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App</h1>
      </header>
      <main>
        <button onClick = {handleCount}>Increase Count</button>
        <h5></h5>
        <Component1 />
        <button onClick={() => <Component1 />}>Click Me!</button>
      </main>
    </div>
  );
}

export default App;

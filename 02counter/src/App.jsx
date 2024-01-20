import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // use state
  let [counter, setCounter] = useState(15);

  // increment
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("value added", Math.random());
  }

  // decrement
  const removeValue = () => {
    counter = counter - 1;
    if(counter>=0)
    setCounter(counter);
  
    console.log("value added", Math.random());
  }
  
  return (
    <>
      <h1>Project 02 | chai aur code</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>

      <p>footer : {counter}</p>

    </>
  )
}

export default App;

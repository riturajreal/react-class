import './App.css'
import Card from './components/Card';

function App() {
  
  let myObj = {
    username : "Hitesh",
    age : 21,
  }

  let newArr = [1,2,3];

  return (
    <>
    <h1>Tailwind Test</h1>
      <Card username = "chai aur code" btnText = "push me" />
    </>
  )
}

export default App

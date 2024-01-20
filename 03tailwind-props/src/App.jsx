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
      <Card channel = "chai aur code" someObj = {myObj} newArr = {newArr} />
      <Card/>
    </>
  )
}

export default App

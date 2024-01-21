
import { useState, useCallback, useEffect } from 'react';

function App() {

  // length
  const [length, setLength] = useState(8);

  //numbers 
  const [numberAllowed, setNumberAllowed] = useState(false);

  //characters
  const [charAllowed, setCharAllowed] = useState(false);

  //password --> empty string
  const [password, setPassword] = useState("");


  // passwordGenerator function -- usecallback() memoize karne ke liye
  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str +="0123456789";
    if(charAllowed) str += "!@#$%^&*()_+[]{}~`";

    for(let i = 1; i<=length ; i++) {
      let char = Math.floor( Math.random() * str.length + 1 );
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);


  // agar dependecies me kuch bhi changes ho
  // to dubara se passwordGenerator run kardo
  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator ] )
  

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-4 my-8 text-orange-300 bg-gray-700'>
      <h1 className='text-xl mb-2 text-center text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          
          <input 
          type="text"
          placeholder='password'
          readOnly
          value={password}
          className='outline-none w-full py-1 px-3' />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>

        <div className='flex text-sm justify-center gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input 
            type="range"
            className='cursor-pointer'
            min={6}
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}
            max={32}/>

            <label>Length :{length} </label>
          </div>

          <div className='flex items-center  gap-x-1'>

            <input type="checkbox" 
            defaultChecked = {numberAllowed} 
            id="numberInput" 
            onChange={()=> {setNumberAllowed((prev)=> !prev)}} />
            <label htmlFor="">Number</label>

            <input type="checkbox" 
            defaultChecked = {charAllowed} 
            id="charInput" 
            onChange={()=> {setCharAllowed((prev)=> !prev)}} />
            <label htmlFor="">Character</label>


          </div>

        </div>

      </div>
    </>
  )
}

export default App

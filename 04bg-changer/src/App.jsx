
import { useState } from 'react';

function App() {
 
  const [color, setColor] = useState("olive");

  return (
    <>

      <div className="w-full h-screen duration-200" style={ { backgroundColor : color} }></div>
      <div className='fixed flex flex-wrap justify-center top-[50%] inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-white px-3 py-2 rounded-xl'>
          <button onClick={()=> {setColor("red")}} className='bg-red-500 rounded-md p-2'>Red</button>
          <button onClick={()=> {setColor("green")}} className='bg-green-500 rounded-md p-2'>Green</button>
          <button onClick={()=> {setColor("pink")}} className='bg-pink-500 rounded-md p-2'>Pink</button>
          <button onClick={()=> {setColor("blue")}} className='bg-blue-500 rounded-md p-2'>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App

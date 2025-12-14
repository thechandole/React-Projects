import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1);

  function addValue(){
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  function removeValue(){
    // counter = counter + 1;

    if (counter >0) {
      setCounter(counter - 1);
      
    } 
      return;
      
    
    }
 
  return (
    <>
    <div className='flex flex-col'>
      <h1 className='m-4 p-2'>Counter Project</h1>

      <h3 className='m-4 p-2 font-bold hover:font-extrabold'>Counter Value : {counter}</h3>

      <button onClick={addValue}>Add Value : {counter}</button>
      <button onClick={removeValue} className='m-2 p-2 text-red-600'>Remove Value : {counter}</button>

    </div>
    </>
  )
}

export default App

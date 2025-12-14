import { useEffect, useState } from 'react'

function App() {
  const [color, setColor] = useState(()=>{
    return(localStorage.getItem('bg-color'))||'olive'});

    useEffect(()=>{
      localStorage.setItem('bg-color',color);
    },[color])

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'gray', 'pink', 'olive', 'cyan'];

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-4 justify-center bg-white px-3 py-2 rounded-3xl shadow-lg'>
            {colors.map((colorItem) =>
            <button 
              key={colorItem}
              onClick={() => setColor(colorItem)}
              className='px-4 cursor-pointer py-2 bg-white gap-4 rounded-full shadow-lg'
              style={{backgroundColor : colorItem}}>{colorItem}</button>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default App

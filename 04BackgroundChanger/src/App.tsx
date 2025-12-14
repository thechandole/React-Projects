import { useState } from 'react'
import { JSX } from 'react'

type Color =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'olive'

function App(): JSX.Element {
  const [color, setColor] = useState<Color>('olive')

  const colors: Color[] = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'gray',
  ]

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-4 justify-center bg-white px-3 py-2 rounded-3xl shadow-lg">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className="px-4 py-2 rounded-full shadow-lg capitalize"
              style={{ backgroundColor: c }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

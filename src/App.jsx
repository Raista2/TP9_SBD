import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert(`Count is now ${count}`);
    }
    else if (count <= 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b  p-6">
        <div className=" p-8 bg-blue-900 bg-opacity-80 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-indigo-50 mb-6 text-center">Servant Counter</h2>

          <div className="flex items-center justify-center mb-8">
            <div className="text-6xl font-bold text-indigo-600 bg-indigo-50 py-6 px-12 rounded-lg w-full text-center">
              {count}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-xl font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              -
            </button>
            <button
              onClick={() => setCount((count) => 0)}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg text-xl font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Reset
            </button>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-xl font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Card />

      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} M Raihan Mustofa | Fate/Grand Order Fan Site</p>
          <p className="text-gray-400 text-sm mt-1">All trademarks and copyrights belong to their respective owners.</p>
        </div>
      </footer>
    </>
  )
}

export default App
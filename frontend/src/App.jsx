import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header with logos */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-24 w-24" alt="React logo" />
          </a>
        </div>

        {/* Main content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-8">Vite + React</h1>
          
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-8">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
            >
              Count is {count}
            </button>
            <p className="text-gray-300">
              Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
          </div>

          <p className="text-2xl text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

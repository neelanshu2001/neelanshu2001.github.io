import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-800 text-white h-screen">
      <HomeLayout />
    </div>
  )
}

export default App

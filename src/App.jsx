import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Navbar from './basic/molecules/navbar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen ">
      <Navbar />
      <HomeLayout />
    </div>
  )
}

export default App

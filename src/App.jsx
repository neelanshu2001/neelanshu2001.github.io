import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Navbar from './basic/molecules/navbar/Navbar'
import { Link,Routes,Route } from 'react-router-dom'

import './App.css'

const App=()=> {
  

  return (
    <div className="h-screen bg-blue-100  text-white flex flex-col hover:text-indigo-100 ">
      <div className="mx-8 rounded-lg drop-shadow-md h-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
      </div>
    </div>
  )
}

export default App

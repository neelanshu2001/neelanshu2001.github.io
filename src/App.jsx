import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Navbar from './basic/molecules/navbar/Navbar'
import { Link,Routes,Route } from 'react-router-dom'

import './App.css'

const App=()=> {
  

  return (
    <div className="h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
     
    </div>
  )
}

export default App

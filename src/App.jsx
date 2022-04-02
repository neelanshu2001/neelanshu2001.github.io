
import HomeLayout from './layouts/HomeLayout'

import { Link,Routes,Route } from 'react-router-dom'

import './App.css'
import Handwritten from './layouts/Handwritten'

const App=()=> {
  

  return (
    
      
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/handwritten" element={<Handwritten />}/>
      </Routes>
     
  )
}

export default App

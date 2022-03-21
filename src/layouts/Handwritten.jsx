

import ImageContainer from '../components/ImageContainer';
import Navbar from '../components/Navbar';
import Predicted from '../components/Predicted';
import { useState } from 'react'
import axios from 'axios';



const Handwritten=()=> {
  const[initialState,setInitialState]=useState(null);
  const[prediction,setPrediction]=useState(null);
  
const fileSelectHandler=(e)=>{
  //console.log(e.target.files[0])
  e?
  setInitialState({
    selectedFile:e.target.files[0]
  }) : setInitialState(null) 
    !e && setPrediction(null)
  console.log(initialState)
  
  }
  
  const onClick=()=>{
    
    const fd= new FormData();
    
    fd.append('image',initialState.selectedFile,'image')
   
    //console.log(JSON.stringify(fd))
    
    axios.post('https://flask-predicition.herokuapp.com/sample',fd,{onUploadProgres : progressEvent=>{
      console.log(`Progress ${Math.round((progressEvent.loaded / progressEvent.Total)*100,2)}`)
    }})
    .then(
      res=>{console.log(res)
    setPrediction(res.data.predicition.name)})
    .catch(
      (err)=>{console.log(err)
    setPrediction(null)})
    
  }
 
  return (
    <div className="bg-gray-200 h-screen pt-6">
    <div className="mx-10 bg-white rounded-xl overflow-hidden shadow-md h-[90.5vh]">
     <Navbar/>
     <div className="flex flex-row justify-center space-x-20">

      <ImageContainer initialState={initialState} onPredict={()=>onClick()} onCurrent={(e)=>{fileSelectHandler(e)}}/>
      <Predicted prediction={prediction}/>
</div>
    </div>
    </div>
  )
}

export default Handwritten

import React from 'react'
import resume from '../profile.json'
import Skills from '../basic/molecules/Skills'
import Navbar from '../basic/molecules/navbar/Navbar'
import About from './About'
const HomeLayout=()=> {
const name=['mongodb','matlab','nodejs','react']
const lang=['cplusplus','python','javascript']

    return (
        <div className="h-screen bg-blue-100  text-white flex flex-col hover:text-indigo-100 ">
      <div className="mx-8 rounded-lg drop-shadow-md h-full ">
        <Navbar />
            <div className=" h-[90.5vh] bg-gray-100">
            <div className="h-full flex flex-row space-x-6 mx-6">
            <div  className={"bg-white bg-opacity-90 bg-cover rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:drop-shadow-md overflow-y-auto"}>    
            <About resume={resume}/>
            </div>
            <div className="flex flex-col  justify-center  w-2/12">
                <div className={`bg-slate-100 py-2 space-y-2 bg-opacity-90 rounded-lg drop-shadow-lg  my-10  text-black  hover:drop-shadow-md transition delay-150 hover:scale-105 flex flex-col  justify-around`}>
                <div className="ml-2  text-lg font-semibold">
                        Programming
                    </div>
                    <Skills name={lang} paddingCircle={5}/>
                </div>
                <div className={`bg-slate-100 py-2 space-y-2 bg-opacity-90 rounded-lg drop-shadow-lg  my-10  text-black  hover:drop-shadow-md transition delay-150 hover:scale-105 flex flex-col  justify-around`}>
                    <div className="ml-2  text-lg font-semibold">
                        Development
                    </div>
                    
                    <Skills name={name} paddingCircle={4}/>
                    
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
       
    )
}

export default HomeLayout

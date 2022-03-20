import React from 'react'
import Bg from "../assets/img/bg.png"
const HomeLayout=()=> {

    return (
        
            
            <div className=" h-[90.5vh] bg-gray-100">
            <div className="h-full flex flex-row space-x-6 mx-6">
            <div  className={"bg-white bg-opacity-90 bg-cover rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:drop-shadow-md"}>HEllo</div>
            <div className="flex flex-col  justify-center  w-2/12">
                <div style={{backgroundImage:`url(${Bg})`} }className={`h-2/6 bg-opacity-90 rounded-lg drop-shadow-lg  my-10 text-black flex flex-col hover:drop-shadow-md transition delay-150 hover:scale-105 `}>HEllo</div>
                <div style={{backgroundImage:`url(${Bg})`} }className={`h-2/6 bg-opacity-90 rounded-lg drop-shadow-lg  my-10  text-black flex flex-col hover:drop-shadow-md transition delay-150 hover:scale-105`}>HEllo</div>
            </div>
            </div>
            </div>
       
    )
}

export default HomeLayout

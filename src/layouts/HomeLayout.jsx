import React from 'react'
import Bg from "../assets/img/bg.png"
const HomeLayout=()=> {

    return (
        <div className="bg-blue-100 h-[90.5vh] text-white flex flex-col hover:text-indigo-100  ">
            
            <div className="h-full flex flex-row justify-around space-x-4 mx-4 ">
            <div  style={{backgroundImage:`url(${Bg})`} }  className={"bg-opacity-90 bg-cover rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:shadow-sm"}>HEllo</div>
            <div style={{backgroundImage:`url(${Bg})`} }className={`bg-opacity-90 rounded-lg drop-shadow-lg  my-10 w-2/12 text-black flex flex-col hover:shadow-sm`}>HEllo</div>
            </div>
        </div>
    )
}

export default HomeLayout

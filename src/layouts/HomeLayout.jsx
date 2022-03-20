import React from 'react'

const HomeLayout=()=> {
    return (
        <div className="bg-blue-100 h-[90.5vh] text-white flex flex-col hover:text-indigo-100  ">
            
            <div className="h-full flex flex-row justify-around space-x-4 mx-4">
            <div className="bg-white rounded-lg drop-shadow-lg  my-10 w-5/6 text-black flex flex-col hover:shadow-sm">HEllo</div>
            <div className="bg-white rounded-lg drop-shadow-lg my-10 w-2/12 text-black flex flex-col hover:shadow-sm">HEllo</div>
            </div>
        </div>
    )
}

export default HomeLayout

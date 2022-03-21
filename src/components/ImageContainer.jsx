import React from 'react'



const ImageContainer=({initialState,onCurrent,onPredict})=> {



    return (
        <div className="flex justify-center mt-8 h-full ">
    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50  ">
    {initialState ? <div className="m-4 rounded-lg "> <div className="relative"><img src={URL.createObjectURL(initialState.selectedFile)} className="h-40 w-64" /><div className="bg-opacity-0.85 shadow-md h-6 rounded-full  font-semibold absolute m-1 text-sm  top-0 right-0 bg-red-600 text-gray-200 px-2 hover:cursor-pointer hover:bg-red-300 hover:text-white hover:scale-105 transition delay-150 text-center " onClick={(e)=>{onCurrent(null)}}>x</div></div></div> :
        <div className="m-4 ">
            <label className="inline-block mb-2 text-gray-500 ">File Upload</label>
            
            <div className="flex items-center justify-center w-full">
                <label
                    className=" flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    
                    <input type="file" className="opacity-0" onChange={(e)=>{onCurrent(e)}} />
                </label>
            </div>
        </div>}
        <div className="flex justify-center p-2">
            {initialState?<button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl" onClick={onPredict}>Predict</button>:
            <button className="w-full opacity-50 px-4 py-2 text-white bg-blue-500 rounded shadow-xl" >Predict</button>
            }
            
        </div>
    </div>
</div> 
    )
}

export default ImageContainer

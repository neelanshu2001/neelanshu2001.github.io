import React, { useEffect } from 'react'



const Predicted=({prediction})=> {

    let z=null
if(prediction)
{
    switch(prediction)
    {case 0:
           z="A"
        break;           
        case 1:
            
            z= "B"
            break;
        case 2:
            
            z= "C"
            break;
        case 3:
            
            z= "D"
            break;
        case 4:
            
            z= "E"
            break;
        case 5:
            
            z= "F"
            break;
        case 6:
            
            z= "G"
            break;
        case 7:
            
            z= "H"
            break;
        case 8:
            
            z= "I"
            break;
        case 9:
            
            z= "J"
            break;
        case 10:
            
            z= "K"
            break;
        case 11:
            
            z= "L"
            break;
        case 12:
            
            z= "M"
            break;
        case 13:
            
            z= "N"
            break;
        case 14:
            
            z= "O"
            break;
        case 15:
            
            z= "P"
            break;
        case 16:
            
            z= "Q"
            break;
        case 17:
            
            z= "R"
            break;
        case 18:
            
            z= "S"
            break;
        case 19:
            
            z= "T"
            break;
        case 20:
            
            z= "U"
            break;
        case 21:
            
            z= "V"
            break;
        case 22:
            
            z= "W"
            break;
        case 23:
            
            z= "X"
            break;
        case 24:
            
            z= "Y"
            break;
        case 25:
            
            z= "Z"
            break;
        case 26:
            
            z= "0"
            break;
        case 27:
            
            z= "1"
            break;
        case 28:
            
            z= "2"
            break;
        case 29:
            
            z= "3"
            break;
        case 30:
            
            z= "4"
            break;
        case 31:
            
            z= "5"
            break;
        case 32:
            
            z= "6"
            break;
        case 33:
            
            z= "7"
            break;
        case 34:
            
            z= "8"
            break;
        case 35:
            
            z= "9"
            break;
    }
    
}
else{
    z=null
  
}
    return (
        <div className="rounded-lg shadow-xl w-2/6 h-72 bg-gray-50 mt-44">
        <div className="font-pred px-8 pt-10 text-5xl font-bold italic text-slate-900
        ">
            {prediction ? <>"The Predicted Character is "<div className="text-7xl text-center mt-4">{z}</div></>:<>" Waiting for input "
               <div className='inline-flex flex flex-row gap-2'>
                <div className="bg-slate-900 p-1.5  w-2 h-2 rounded-full animate-bounce blue-circle animation-delay-200"
                ></div>
                <div
                className="bg-slate-900 p-1.5 w-2 h-2 rounded-full animate-bounce animation-delay-400"
                ></div>
                <div
                className="bg-slate-900 p-1.5  w-2 h-2 rounded-full animate-bounce transition animation-delay-500"
                ></div></div> </>}
            
        </div>
        </div>
    )
}

export default Predicted

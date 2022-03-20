import React from 'react'
import matlab from '../../assets/img/matlab.png'
import mongodb from '../../assets/img/mongodb.png'
import nodejs from '../../assets/img/nodejs.png'
import react from '../../assets/img/react.png'
import python from '../../assets/img/python.gif'
import javascript from '../../assets/img/javascript.gif'
import cplusplus from '../../assets/img/cplusplus.png'


const Image=({name})=> {
console.log(name);
    return (
        <img src={name==='matlab'? matlab :name==='mongodb'? mongodb : name==='nodejs'?nodejs : name==='react'? react :name==='python' ? python : name==='javascript'?javascript:cplusplus} className='w-20 h-20 transition delay-200 cursor-pointer hover:scale-105 items-center'></img >
    )
}

export default Image

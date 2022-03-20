import React from 'react'
import Image from '../atoms/Image'
import Carousel from 'react-material-ui-carousel'

const Skills=({name,paddingCircle})=> {
    return (
        <Carousel interval={3000} 
                       
                       navButtonsProps={{style:{
                            color: "white",
                            fontSize: "20px",
                            padding:"4px",
                        
                        }}}
                       
                       navButtonsWrapperProps={{style:{
                        height: "120px",
                        backgroundColor: "transparent",
                       }}}

                       indicatorIconButtonProps={{
                        style: {
                            padding: '2px',    // 1
                                // 3
                        }
                        }} 
                        indicatorContainerProps={{
                            style: {
                                marginTop: '10px', // 5
                                // 4
                            }
                        }} 
                        >
                           { 
                             name.map((item,key)=>(<div className=" flex flex-row justify-center "><div className={`bg-gray-50 hover:bg-white rounded-full p-${paddingCircle}`}><Image name={item} key={key}  /></div></div>) )
                           }
                        </Carousel>
    )
}

export default Skills

import React from 'react'
import Bg from '../../assets/img/bg.png'
import Handwritten from '../../assets/img/Handwritten Alphanumeric  Recognition.png'
import Contest from '../../assets/img/Contest Tracker Website.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Card=({project})=> {
   // console.log(project)

    return (
      <div className="  cursor-default w-60 h-30 rounded-xl  overflow-hidden shadow-lg transition delay-150 hover:shadow-md hover:scale-105">
      {project.link  ?
         
          (<Link to={project.link}>
          <img className="" src={project.name=='Contest Tracker Website'?Contest : Handwritten} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
            <div className="font-bold text-sm mb-2  px-2 flex ">{project.name}</div>
            <div className="text-gray-700 text-xs italic">
              {project.description}    </div>
            </div>
            </Link>)
            :
       
        (<a href={project.web} target="_blank">
        <img className="" src={project.name=='Contest Tracker Website'?Contest : Handwritten} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{project.name}</div>
        <div className="text-gray-700 text-xs italic">
        {project.description}    </div>
        </div>
        </a>
        )
      }
        </div>
    )
}

Card.propTypes = {


}

export default Card

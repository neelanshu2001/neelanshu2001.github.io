import React from 'react'
import Bg from '../../assets/img/bg.png'
import PropTypes from 'prop-types'

const Card=({project})=> {
    console.log(project)

    return (
        <div className="cursor-default w-60 h-30 rounded overflow-hidden shadow-lg transition delay-150 hover:shadow-md hover:scale-105">
          <img className="" src={Bg} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-sm mb-2">{project.name}</div>
    <div className="text-gray-700 text-xs">
      {project.description}    </div>
  </div>
  
</div>
    )
}

Card.propTypes = {


}

export default Card

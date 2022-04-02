import React from 'react'
import Card from '../../atoms/Card'
function ProjectList({projects}) {
    console.log({projects})
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-6 ">
        {(projects || projects.length>0 )? projects.map((project,index)=>(
            <Card project={project} key={index}/>
        )):null
        }
        </div>
    )
}

export default ProjectList

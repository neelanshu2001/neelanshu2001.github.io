import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from './projects/ProjectList'
const Projects=({projects})=> {
    return (
        <div className="flex flex-col space-x-4 my-2 mx-auto ">
            <div className="text-2xl  font-bold text-slate-800 my-2">
                
                Projects
                
            </div>
            <div className="border my-2"></div>
        <ProjectList projects={projects} /></div>
    )
}

export default Projects

import React from 'react'

function Project({project}) {
    return (
        <div className="z-30 w-48 h-64 border border-gray-200 rounded-md shadow-xl">
            <img src={project.image} alt="project1" />
            <h2>{project.name}</h2>
    <p>{project.stack}</p>
        </div>
    )
}

export default Project

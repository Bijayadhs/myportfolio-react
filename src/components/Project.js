import React from 'react'

function Project({project}) {
    return (
        <div className="w-48 h-64 border border-gray-200 rounded-md shadow-xl">
            <img src={`/img/${project.image}.jpg`} alt="project1" />
            <h2>{project.name}</h2>
    <p>{project.stack}</p>
        </div>
    )
}

export default Project

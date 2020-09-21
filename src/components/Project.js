import React from 'react'

function Project({project}) {
    const {image,name,description,stack}=project
    // let arr=stack.toString().split(',');
    return (
        <div className="relative w-48  h-64 my-8 mr-4  border border-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img className="h-2/3 w-full" src={image} alt=""/>
            <div className="px-2 py-1">
                <h2 className="font-extrabold text-xl text-gray-700">{name}</h2>
                <h3 className="font-thin text-sm leading-5 font-sm">{description}</h3>
                <p className="mx-2 absolute bottom-0 right-0 text-purple-500 text-xs">
                    {stack.toString().split(',').map(each=>(
                            <span key={each} className=" py-1 px-2 bg-purple-300 border rounded-lg">{each}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default Project

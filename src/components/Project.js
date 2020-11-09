import React from 'react'
import { Link } from 'react-router-dom';
import git from '../assets/git.svg';
import browser from '../assets/browser.svg';


function Project({ project }) {
    const { image, name, description, stack, github, website } = project
    // let arr=stack.toString().split(',');
    return (
        <div className="relative w-48  h-64 my-8 mr-4  border border-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img className="h-1/3 w-full" src={image} alt="" />
            <div className="px-2 py-1">
                <h2 className="font-extrabold text-xl text-gray-700">{name}</h2>
                <h3 className="font-thin text-sm leading-5 font-sm">{description}</h3>
                <div className="flex justify-start items-center absolute bottom-0 left-0 right-0 z-10 p-2 bg-gray-500 text-purple-500">
                    <Link to={github} className="text-green-300" target="_blank">
                        <img className="w-4 h-4" src={git} alt='git' /></Link>
                    <Link to={website} className="text-green-300" target="_blank">

                        <img className="w-4 h-4" src={browser} alt='git' /></Link>
                    <p className="mx-2 mb-2 absolute bottom-0 right-0 text-purple-500 text-xs">
                        {stack.toString().split(',').map(each => (
                            <span key={each} className="px-1 mx-1 bg-purple-300 border rounded-lg">{each}</span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project

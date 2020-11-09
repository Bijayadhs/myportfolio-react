import React from 'react'

function About() {
    return (
        <div id="about" className="container mx-auto px-12 lg:py-16 py-32 min-h-screen">
            <h1 className="text-4xl font-semibold border-b-4 border-purple-400  inline-block  mb-4 text-purple-700 ">About Me</h1>
            <div className="flex justify-around items-center flex-wrap space-y-4 space-x-4">
                <div className="tranform translate-x-2 border bg-purple-300 rounded-lg w-1/3 shadow-md hover:shadow-2xl cursor-pointer">
                    <p className="text-gray-100 p-4">My name is Bijaya Adhikari, you can call me 'B J'.</p>
                </div>
                <div className="tranform translate-x-2 border bg-purple-300 rounded-lg w-1/3 shadow-md hover:shadow-2xl cursor-pointer">
                    <p className="text-gray-100 p-4">I completed my Masters in Information Technology from Charles Sturt University in 2019.</p>
                </div>
                <div className="tranform translate-x-2 border bg-purple-300 rounded-lg w-1/3 shadow-md hover:shadow-2xl cursor-pointer">
                    <p className="text-gray-100 p-4">I am a self-taught web developer searching for job.</p>
                </div>
                <div className="tranform translate-x-2 border bg-purple-300 rounded-lg w-1/3 shadow-md hover:shadow-2xl cursor-pointer">
                    <p className="text-gray-100 p-4">Right now, I am working in a restaurant as a part time. Since 3 years I was full-time cook in Vascos Charcoal Chicken.</p>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react';
import Project from './Project';


function Projects() {
    const myProjects = [
        {
            id: 1,
            name: 'JBHIFI',
            stack: ['html,css,react'],
            demo: true,
            description: 'This my big project on React',
            image: process.env.PUBLIC_URL + '/img/jbhifi.jpg'
        },
        {
            id: 2,
            name: 'Snake',
            stack: 'html,css,JS',
            demo: true,
            description: 'After practicing pacman, I build this by my own',
            image: process.env.PUBLIC_URL + '/img/snake.jpg'
        },
        {
            id: 3,
            name: 'My Portfolio',
            stack: 'html,tailwindcss,react',
            demo: true,
            description: 'This my big project on React',
            image: process.env.PUBLIC_URL + '/img/myportfolio.jpg'
        },
        {
            id: 4,
            name: 'Pomokanban',
            stack: 'html,tailwindcss,JS',
            demo: false,
            description: 'My weekly inspiring plot on website',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        },
        {
            id: 5,
            name: 'Amazon',
            stack: 'html,css,react',
            demo: false,
            description: 'My weekly inspiring plot on website',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'

        },
        {
            id: 6,
            name: 'Google Keeper',
            stack: 'html,tailwindcss,react',
            demo: false,
            description: 'Tailwind practice and logic behind the site',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        },
    ];
    return (
        <div id="projects" className="container mx-auto px-12 py-24 min-h-screen">
            <h1 className="text-4xl font-semibold border-b-4 border-purple-400  inline-block  mb-4 text-purple-700 ">Projects</h1>
            <div className="flex justify-between items-center flex-wrap">
                {myProjects.map(project => {
                    return <Project key={project.id} project={project} />

                })}
            </div>
        </div>
    )
}

export default Projects

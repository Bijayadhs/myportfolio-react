import React from 'react';
import Project from './Project';


function Projects() {
    const myProjects =[
        {
            id:1,
            name: 'JBHIFI',
            stack: 'html,css,react',
            demo: true,
            description:'This my big project on React',
            image:'img/jbhifi.jpg'
        },
        {
            id:2,
            name: 'Snake',
            stack: 'html,css,JS',
            demo: true,
            description:'After practicing pacman, I build this by my own',
            image:'img/snake.jpg'
        },
        {
            id:3,
            name: 'My Portfolio',
            stack: 'html,tailwindcss,react',
            demo: true,
            description:'This my big project on React',
            image: 'img/myportfolio.jpg'
        },
        {
            id:4,
            name: 'Pomokanban',
            stack: 'html,tailwindcss,JS',
            demo: false,
            description:'My weekly inspiring plot on website',
            image:'img/pomokanban.jpg'
        },
    ];
    return (
        <div id="projects" className="container py-24 h-screen">
            <h1 className="text-3xl ml-8 mb-2 text-purple-700 ">Projects</h1>
            <div  className="flex justify-around items-center">
            {myProjects.map(project=>{
                return <Project key={project.id} project={project}/>

            })}
        </div>
        </div>
    )
}

export default Projects

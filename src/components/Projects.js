import React from 'react';
import Project from './Project';


function Projects() {
    const myProjects = [
        {
            id: 1,
            name: 'JBHIFI',
            stack: 'html,css,react',
            github: 'https://github.com/Bijayadhs/jbhifi',
            description: 'My big project on cloning Australia\'s biggest ecommerce electronics web application.',
            image: process.env.PUBLIC_URL + '/img/jbhifi.jpg'
        },
        {
            id: 2,
            name: 'Snake',
            stack: 'html,css,JS',
            github: '/',
            description: 'After building PACMAN game, I build this SNAKE game on my own with just CSS and JavaScript.',
            image: process.env.PUBLIC_URL + '/img/snake.jpg'
        },
        {
            id: 3,
            name: 'My Portfolio',
            stack: 'html,css,javascript',
            github: 'https://github.com/Bijayadhs/myportfolio-react',
            description: 'This is my another portfolio using just HTML, CSS and Vanilla JavaScript. We developer need a portfolio to showcase as resume. This is it',
            image: process.env.PUBLIC_URL + '/img/myportfolio.jpg'
        },
        {
            id: 4,
            name: 'Pomokanban',
            stack: 'html,tailwindcss',
            demo: false,
            description: 'A project am dream about. This is a productive application to plot a weekly task to complete. I finished the UI design using tailwindcss.',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        },
        {
            id: 5,
            name: 'Amazon',
            stack: 'html,css,react',
            github: '/',
            description: 'Amazon clone using React. I really want to build some e-commerce application.',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'

        },
        {
            id: 6,
            name: 'Google Keeper',
            stack: 'html,tailwindcss,react',
            github: 'https://github.com/Bijayadhs/google-keeper',
            description: 'I really love the google keeper to keep some important notes and reminder. I tried to build the same in this clone. I useed Tailwind and React to learn the concept behind the state flow.',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        },
        {
            id: 7,
            name: 'My Portfolio-BackEnd',
            stack: 'html,tailwindcss,react,node',
            github: 'https://github.com/Bijayadhs/myportfolio_backend',
            description: 'I really love the google keeper to keep some important notes and reminder. I tried to build the same in this clone. I useed Tailwind and React to learn the concept behind the state flow.',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        },
        {
            id: 8,
            name: 'Devine',
            stack: 'html,css,javascript',
            github: 'https://github.com/Bijayadhs/devine',
            description: 'Website I build for a school in Nepal.',
            image: process.env.PUBLIC_URL + '/img/pomokanban.jpg'
        }
    ];
    return (
        <div id="projects" className="container mx-auto px-12 lg:py-16 py-32 min-h-screen">
            <h1 className="text-4xl font-semibold border-b-4 border-purple-400  inline-block  mb-4 text-purple-700 ">Projects</h1>
            <div className="flex justify-around items-center flex-wrap">
                {myProjects.map(project => {
                    return <Project key={project.id} project={project} />

                })}
            </div>
        </div>
    )
}

export default Projects

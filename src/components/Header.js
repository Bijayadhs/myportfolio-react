import React from 'react';


function Header() {

    return (
    <header   className="container m-4 bg-transparent flex justify-between items-center fixed">
        <div className="font-cursive font-bold text-4xl">BJ.</div>
        <div className="flex items-center">
            <div className="font-cursive m-2">Theme Mode-></div>
            <div className="theme bg-orange-400 mr-4"></div>
            <div className="theme bg-purple-400 mr-4"></div>
            <div className="theme bg-black"></div>
            
        </div>
        <ul className=" mr-4 flex justify-between font-robo text-xl text-gray-700">
               <li ><a className="mr-4 hover:border-solid hover:border-2 hover:border-orange-200" href="#home">Home</a></li>
               <li className="mr-4"><a href="#projects">Projects</a></li>
               <li className="mr-4"><a href="#about">About me</a></li>
               <li className="mr-4"><a href="#contact">Contact me</a></li>
        </ul>
        
    </header>
    )
}

export default Header


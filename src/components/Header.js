import React from "react";

function Header({themes,setTheme}) {
    const orangeTheme = theme=>{
      setTheme(themes[0])
    }
    const purpleTheme = theme=>{
      setTheme(themes[1])
    }
    const darkTheme = theme=>{
      setTheme(themes[2])
    }
  return (
    <header className="bg-teal-100 fixed w-screen">
      <div className="container mx-auto px-12 flex justify-between items-center ">
        {/* logo-title */}
        <div className="text-4xl">
          <h1 className="font-cursive">BIJAYA A.</h1>
        </div>
        
        {/* theme */}
        <div className="flex items-center">
          <div className="font-cursive m-2">Theme-></div>
          <button onClick={orangeTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-orange-400 mr-2"></button>
          <button onClick={purpleTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-purple-400 mr-2"></button>
          <button onClick={darkTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-black"></button>
        </div>

        {/* nav-menu */}
        <ul className="space-x-4 flex justify-between font-robo text-md text-gray-700">
          <li className="py-1 hover:text-gray-900 border-b-2 border-teal-100 hover:border-teal-400 transition duration-500">
            <a  href="#home">
              Home
            </a>
          </li>
          <li className="py-1 hover:text-gray-900 border-b-2 border-teal-100 hover:border-teal-400 transition duration-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="py-1 hover:text-gray-900 border-b-2 border-teal-100 hover:border-teal-400 transition duration-500">
            <a href="#about">About me</a>
          </li>
          <li className="py-1 hover:text-gray-900 border-b-2 border-teal-100 hover:border-teal-400 transition duration-500">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function Header({ theme, themes, setTheme }) {
  const orangeTheme = theme => {
    setTheme(themes.orange)
  }
  const purpleTheme = theme => {
    setTheme(themes.purple)
  }
  const darkTheme = theme => {
    setTheme(themes.dark)
  }
  return (
    <header className={`bg-${theme.primaryColor}-400 text-white fixed w-screen z-50`}>
      <div className="container mx-auto px-12 lg:flex justify-between items-center ">
        <div className="flex justify-between items-center">
          {/* logo-title */}
          <div className="text-4xl">
            <h1 className={`font-cursive text-${theme.secondaryColor}-700`}>BIJAYA A.</h1>
          </div>

          {/* theme */}
          <div className="flex items-center">
            <div className="font-cursive m-2">Theme-></div>
            <button onClick={orangeTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-teal-500 mr-2"></button>
            <button onClick={purpleTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-purple-500 mr-2"></button>
            <button onClick={darkTheme} className=" focus:outline-none w-6 h-6 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-black"></button>
          </div>
        </div>


        {/* nav-menu */}
        <ul className={`mb-2 space-x-4 z-100 flex justify-between font-robo text-md text${theme.secondaryColor}-700`}>
          <li className="py-1 cursor-pointer">
            <a className={`hover:text-${theme.secondaryColor}-500 active:text-${theme.secondaryColor}-500 transform hover:scale-105 border-b-2 border-${theme.primaryColor}-400	 hover:border-${theme.secondaryColor}-400 active:border-${theme.secondaryColor}-400  transition duration-500`} href="#home">Home</a>
          </li>
          <li className={`py-1 cursor-pointer hover:text-${theme.secondaryColor}-500 focus:text-${theme.secondaryColor}-500 transform hover:scale-105 border-b-2 border-${theme.primaryColor}-400	 hover:border-${theme.secondaryColor}-400 focus:border-${theme.secondaryColor}-400  transition duration-500`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`py-1 cursor-pointer hover:text-${theme.secondaryColor}-500 focus:text-${theme.secondaryColor}-500 transform hover:scale-105 border-b-2 border-${theme.primaryColor}-400	 hover:border-${theme.secondaryColor}-400 focus:border-${theme.secondaryColor}-400  transition duration-500`}>
            <a href="#about">About me</a>
          </li>
          <li className={`py-1 cursor-pointer hover:text-${theme.secondaryColor}-500 focus:text-${theme.secondaryColor}-500 transform hover:scale-105 border-b-2 border-${theme.primaryColor}-400	 hover:border-${theme.secondaryColor}-400 focus:border-${theme.secondaryColor}-400  transition duration-500`}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </header >
  );
}

export default Header;

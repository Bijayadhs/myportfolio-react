import React, { useContext } from "react";
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';


function Header() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);


  const orangeTheme = () => {
    appDispatch({ type: 'TEAL_MODE' });
  }
  const purpleTheme = () => {
    appDispatch({ type: 'PURPLE_MODE' })
  }
  const darkTheme = () => {
    appDispatch({ type: 'DARK_MODE' })
  }
  return (
    <header className={`${appState.textColor} ${appState.backgroundColor} fixed w-screen z-50`}>
      <div className="container mx-auto px-12 lg:flex justify-between items-center ">
        <div className="flex justify-between items-center">
          {/* logo-title */}
          <div className="text-2xl lg:text-4xl">
            <h1 className={`font-cursive ${appState.backgroundColor}`}>BIJAYA A.</h1>
          </div>

          {/* theme */}
          <div className="lg:flex lg:items-center items-center">
            <div className="font-cursive mx-2 my-1">Theme:</div>
            <button onClick={orangeTheme} className=" focus:outline-none lg:w-6 w-4 lg:h-6 h-4 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-teal-500 mr-2"></button>
            <button onClick={purpleTheme} className=" focus:outline-none lg:w-6 w-4 lg:h-6 h-4 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-purple-500 mr-2"></button>
            <button onClick={darkTheme} className=" focus:outline-none lg:w-6 w-4 lg:h-6 h-4 border  rounded-full transition duration-300 transform hover:scale-125 focus:scale-125 shadow-md hover:shadow-xl bg-black"></button>
          </div>
        </div>


        {/* nav-menu */}
        <ul className={`mb-2 space-x-4 z-100 flex justify-between font-robo text-md ${appState.backgroundColor}`}>
          <li className={`py-1 cursor-pointer
            hover:${appState.backgroundColor} active:${appState.backgroundColor} transform hover:scale-105 border-b-2 ${appState.borderColor}	 hover:${appState.hoverColor}-400 active:${appState.bordergroundr}-400  transition duration-500`}>
            <a href="#home">Home</a>
          </li>
          <li className={`py-1 cursor-pointer hover:${appState.hoverColor} focus:${appState.hoverColor} transform hover:scale-105 border-b-2 	 hover:${appState.hoverColor}-400 focus-${appState.hoverColor}-400  transition duration-500`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`py-1 cursor-pointer hover:${appState.hoverColor} focus:${appState.hoverColor} transform hover:scale-105 border-b-2 	 hover:${appState.hoverColor} focus-${appState.hoverColor}  transition duration-500`}>
            <a href="#about">About me</a>
          </li>
          <li className={`py-1 cursor-pointer hover:${appState.hoverColor} focus:${appState.hoverColor} transform hover:scale-105 border-b-2 	 hover:${appState.hoverColor} focus:border-${appState.borderColor}  transition duration-500`}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </header >
  );
}

export default Header;

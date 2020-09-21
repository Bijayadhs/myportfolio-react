import React from 'react';

function Banner({theme}) {
    console.log(theme)
    return (
        <section id="home"  className={`min-h-screen -py-8 overflow-x-hidden z-20 text-${theme.primaryColor}-500 bg-${theme.secondaryColor}-100`}>
        <div className="container mx-auto px-12 pt-48  flex justify-between">
            <div className="z-50">
                <h2 className={`text-3xl font-thin inline-block text-${theme.primaryColor}-400`}>Hello, Namaste<span>!</span></h2>
                <h1 className={`font-bold text-4xl text-${theme.primaryColor}-600`}>My name is <span className="animate-pulse">Bijaya Adhikari</span></h1>
                <h6 className={`font-thin text-${theme.secondaryColor}-700 text-gray-500 text-lg tracking-widest`}>Web Developer | IT Guy | EEE</h6>
               <button className={`border border-${theme.buttonColor} py-2 px-4 my-4 rounded-lg shadow-2xl outline-none bg-${theme.buttonColor} `}>Download Resume</button>
            </div>
            {/* image */}
            <div className="mr-8 mb-8 border-8 border-purple-500 rounded-full overflow-hidden" >
                <img className="relative w-64 h-56  shadow-lg z-0" src={process.env.PUBLIC_URL + '/img/bj.jpg'} alt='Bijaya'/>
                
            </div>
            <div className="top z-0">
                    <div className="fixed animate-pulse top-0 left-0 z-0 opacity-75  w-8 h-16 mt-48 ml-48 rounded-full  bg-gradient-to-br from-purple-500 to-purple-100 transform -rotate-45 -translate-x-48 -translate-y-16"></div>
                    <div className="fixed animate-pulse top-0 left-0 z-0 opacity-75  w-8 h-16 mt-56 ml-48 rounded-full  bg-gradient-to-br from-orange-500 to-orange-100 transform rotate-45 -translate-y-4 translate-x-16"></div>
                    <div className="fixed animate-pulse top-0 left-0 z-0 opacity-75  w-8 h-16 mt-64 ml-48 rounded-full  bg-gradient-to-br from-teal-500 to-teal-100 transform -rotate-45 translate-y-32"></div>
               </div>
            <div className="bottom absolute z-0 bottom-0 right-0 ">
                    <div className=" opacity-25  w-64 h-64 rounded-full  bg-gradient-to-br from-purple-400 to-purple-100 transform mt-32 translate-y-64 -translate-x-32 "></div>
                    <div className="opacity-25  w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 to-orange-100 transform  translate-y-32 -translate-x-64"></div>
                    <div className=" opacity-25  w-64 h-64 rounded-full bg-gradient-to-br from-teal-400 to-teal-100 transform  translate-y-16  -translate-x-24"></div>
               </div>
            
        </div>
    </section>
    )
}

export default Banner;

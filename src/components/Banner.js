import React from 'react';

function Banner({theme}) {
    return (
        <section id="home"  className={`min-h-screen scroll-x-none ${theme.primaryColor} ${theme.bgColor}`}>
        <div className="container mx-auto px-12 pt-48  flex justify-between">
            <div className="">
                <h2 className={`text-3xl font-thin ${theme.primaryColor} ${theme.bgColor}`}>Hello, Namaste<span className="">!</span></h2>
                <h1 className="font-bold text-4xl">My name is Bijaya Adhikari</h1>
                <h6 className={`font-thin ${theme.secondaryColor} text-gray-500 text-lg tracking-widest`}>Web Developer | IT Guy | EEE</h6>
               
            </div>
            {/* image */}
            <div className="mr-8 mb-8 border-8 border-purple-500 rounded-full overflow-hidden" >
                <img className="relative w-56 h-56  shadow-lg" src={process.env.PUBLIC_URL + '/img/bj.jpg'} alt='Bijaya'/>
                
            </div>
            <div className="top">
                    <div className="absolute top-0 left-0 opacity-75 ml-4 w-64 h-20 rounded-full bg-purple-400 bg-gradient-to-br from-purple-400 to-purple-100 transform -rotate-45 -translate-x-32"></div>
                    <div className="absolute top-0 left-0 opacity-75 mr-4 w-64 h-20 rounded-full bg-orange-400 bg-gradient-to-br from-orange-400 to-orange-100 transform -rotate-45 "></div>
                    <div className="absolute top-0 left-0 opacity-75 -ml-4 w-64 h-20 rounded-full bg-teal-400 bg-gradient-to-br from-teal-400 to-teal-100 transform -rotate-45 translate-x-32"></div>
               </div>
            <div className="bottom">
                    <div className="absolute z-0 bottom-0 right-0 opacity-75 ml-4 w-64 h-20 rounded-full bg-purple-400 bg-gradient-to-br from-purple-400 to-purple-100 transform -rotate-45 -translate-x-32"></div>
                    <div className="absolute bottom-0 right-0 opacity-75 mr-4 w-64 h-20 rounded-full bg-orange-400 bg-gradient-to-br from-orange-400 to-orange-100 transform -rotate-45 "></div>
                    <div className="absolute bottom-0 right-0 opacity-75 -ml-4 w-64 h-20 rounded-full bg-teal-400 bg-gradient-to-br from-teal-400 to-teal-100 transform -rotate-45 translate-x-32"></div>
               </div>
            
        </div>
    </section>
    )
}

export default Banner;

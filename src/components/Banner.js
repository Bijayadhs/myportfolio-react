import React from 'react';

function Banner({ theme }) {
    console.log(theme)
    return (
        <section id="home" className={`min-h-screen -py-8 overflow-x-hidden z-10 text-${theme.primaryColor}-500 bg-${theme.secondaryColor}-100`}>
            <div className="container mx-auto px-12 pt-32  flex justify-between">
                <div className="z-40">
                    <h2 className={`text-lg text-${theme.primaryColor}-400`}>Hello, Namaste<span role="img" aria-label="Namaste">🙏</span></h2>
                    <h1 className={`leading-8 font-bold text-3xl text-${theme.primaryColor}-600`}>My name is <span className="text-4xl animate-pulse">Bijaya Adhikari</span></h1>
                    <h6 className={`mt-4 font-thin text-sm leading-4 lg:leading-6 tracking-tighter lg:tracking-widest text-${theme.secondaryColor}-700 text-gray-500`}>Web Developer | IT Guy | EEE</h6>
                    <button className={`border border-${theme.primaryColor} text-white py-2 px-4 my-4 rounded-lg shadow-2xl focus:outline-none bg-${theme.primaryColor}-600 hover:bg-${theme.primaryColor}-500 `}>Download Resume</button>
                </div>
                {/* image */}
                <div className="my-4 md:h-64 md:w-64 w-48 h-40 border-4 lg:border-8 border-purple-500 rounded-full overflow-hidden" >
                    <img className="relative w-full h-full  shadow-lg z-10" src={process.env.PUBLIC_URL + '/img/bj.jpg'} alt='Bijaya' />

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

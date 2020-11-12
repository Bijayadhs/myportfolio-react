import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-gray-800">
            <div className="container text-white mx-auto px-12 py-8 my-4 flex justify-between items-center">
                <p>copyright&copy;Bijaya 2020 | BornToWebDev</p>
                <a href="#home">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
                        <ArrowUpwardIcon />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container mx-auto px-12 my-4 flex justify-between items-center">
            <p>&copy;2020@Bijaya</p>
            <a href="#home">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <ArrowUpwardIcon />
                </div>
            </a>
        </div>
    )
}

export default Footer

import React from "react";
import { Link } from "react-router-dom";
import DarkModeToogle from "../utils/DarkModeToogle";
import { Links } from "./Links";

import { Search } from "./Search";

export const Navbar = () => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between items-center border-b dark:border-gray-700 border-gray-200 pt-8 space-x-5'>
            <div className='flex flex-row justify-between items-center space-x-5 w-screen px-4'>
                <div className='flex flex-col md:flex-row  items-center space-x-5 w-[66%]'>
                    <Link to='/'>
                        <img
                            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                            alt=''
                            style={{ width: "60%" }}
                        />
                    </Link>
                    <Search />
                </div>
                <DarkModeToogle />
            </div>
            <Links />
        </div>
    );
};

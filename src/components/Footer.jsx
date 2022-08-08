import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => (
    <div className='flex flex-col bg-[#f2f2f2] dark:bg-gray-900  w-full text-[#70757A] mt-auto '>
        <NavLink to='/' className='NavLink border-b border-[#dadce0] dark:text-white dark:border-gray-700 px-4 py-3 text-sm lg:px-8'>
            India
        </NavLink>
        <div className='flex flex-col  md:flex-row justify-evenly py-3 lg:justify-between lg:px-10 dark:text-white text-sm'>
            <div className='flex flex-row justify-between space-x-6  p-2'>
                <NavLink to='/' className='NavLink hover:underline '>
                    About
                </NavLink>
                <NavLink to='/' className='NavLink hover:underline'>
                    Advertising
                </NavLink>
                <NavLink to='/' className='NavLink hover:underline '>
                    Business
                </NavLink>
                <NavLink to='/' className='NavLink hover:underline '>
                    How Search works
                </NavLink>
            </div>
            <div className='flex flex-row justify-between space-x-6 p-2'>
                <NavLink to='/' className='NavLink hover:underline '>
                    Privacy
                </NavLink>
                <NavLink to='/' className='NavLink hover:underline '>
                    Terms
                </NavLink>
                <NavLink to='/' className='NavLink hover:underline '>
                    Settings
                </NavLink>
            </div>
        </div>
    </div>
);

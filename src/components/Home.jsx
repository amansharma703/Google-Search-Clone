import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "./Search";

const Home = () => {
    return (
        <div className='bg-white'>
            <div class='flex flex-col items-center justify-center h-screen'>
                <div class='mb-6'>
                    <img
                        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                        alt='google Logo'
                        class='object-cover'
                    />
                </div>
                <Search />
                <div class='flex gap-x-6'>
                    <button class='px-3 py-2 text-sm font-normal cursor-pointer hover:shadow bg-[#f8f9FA] border border-[#f8f9FA] rounded'>
                        Google Search
                    </button>
                    <button
                        className='NavLink px-3 py-2 text-sm font-normal cursor-pointer hover:shadow bg-[#f8f9FA]  border border-[#f8f9FA] rounded'
                        onClick={() => {
                            window.location = "https://www.google.com/doodles";
                        }}
                    >
                        I'm Feeling Lucky
                    </button>
                </div>
                <div class='mt-6'>
                    <div class='text-sm'>
                        Google offered in: <span class='ml-2 text-blue-700'>हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-[#f2f2f2] absolute bottom-0 w-full text-[#70757A]'>
                <NavLink to='/' className='NavLink border-b border-[#dadce0] px-4 py-3 text-sm lg:px-8'>
                    India
                </NavLink>
                <div className='flex flex-row justify-evenly py-3 lg:justify-between lg:px-10 '>
                    <div className='flex flex-row justify-between space-x-6  '>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            About
                        </NavLink>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            Advertising
                        </NavLink>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            Business
                        </NavLink>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            How Search works
                        </NavLink>
                    </div>
                    <div className='flex flex-row justify-between space-x-6'>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            Privacy
                        </NavLink>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            Terms
                        </NavLink>
                        <NavLink to='/' className='NavLink hover:underline text-sm'>
                            Settings
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

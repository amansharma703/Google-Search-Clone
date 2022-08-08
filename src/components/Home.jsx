import React from "react";
import DarkModeToogle from "../utils/DarkModeToogle";
import { Search } from "./Search";

const Home = () => {
    return (
        <div className='bg-white dark:bg-gray-900 px-2'>
            <div className='absolute right-10 top-10'>
                <DarkModeToogle />
            </div>

            <div className='flex flex-col items-center justify-center h-screen'>
                <div className='mb-6'>
                    <img
                        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                        alt='google Logo'
                        className='object-cover'
                    />
                </div>
                <Search isHomePageSearch />
                <div className='mt-6'>
                    <div className='text-sm break-words'>
                        Google offered in: <span className='ml-2 text-blue-600'>हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

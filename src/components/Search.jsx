import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/StateContextProvider";
import { AiOutlineClose } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export const Search = ({ isHomePageSearch = false }) => {
    const { searchTerm, setSearchTerm } = useStateContext();
    const [text, setText] = useState(searchTerm);
    const [debouncedValue] = useDebounce(text, 1000);
    const location = useLocation();

    useEffect(() => {
        setText(searchTerm);
    }, [location.pathname, searchTerm]);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue]);

    let navigate = useNavigate();
    const routeChange = () => {
        if (text !== "") {
            let path = `/search`;
            setSearchTerm(text);
            navigate(path);
        }
    };

    const startFuncCall = (e) => {
        if (e.key === "Enter" && text !== "") {
            let path = `/search`;
            setSearchTerm(text);
            navigate(path);
        }
    };

    return (
        <>
            <div className='flex items-center w-full mx-auto  border dark:border-gray-700 rounded-full lg:max-w-2xl hover:shadow-md bg-white dark:bg-gray-700'>
                <div className='pl-5'>
                    <AiOutlineSearch size='1.2em' className=' text-black dark:text-white' />
                </div>
                <input
                    type='text'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyDown={startFuncCall}
                    className='w-full text-black rounded-full py-[14px] pl-4 outline-none dark:text-white dark:bg-gray-700'
                />
                <div className='pr-5'>
                    {text !== "" ? (
                        <button
                            type='button'
                            onClick={() => {
                                setText("");
                            }}
                            className='mt-1'
                        >
                            <AiOutlineClose size='1.2em' className=' text-black dark:text-white mt-1' />
                        </button>
                    ) : (
                        <BiMicrophone color='#5C8AF0' size='1.3em' />
                    )}
                </div>
            </div>
            {isHomePageSearch && (
                <div className='flex gap-x-6 mt-4'>
                    <button
                        className='NavLink px-3 py-2 text-sm font-normal cursor-pointer hover:shadow bg-[#f8f9FA]  border border-[#f8f9FA] rounded dark:bg-[#303134] dark:border-gray-700'
                        onClick={() => {
                            routeChange();
                        }}
                    >
                        Google Search
                    </button>
                    <button
                        className='NavLink px-3 py-2 text-sm font-normal cursor-pointer hover:shadow bg-[#f8f9FA]  border border-[#f8f9FA] rounded dark:bg-[#303134] dark:border-gray-700'
                        onClick={() => {
                            window.location = "https://www.google.com/doodles";
                        }}
                    >
                        I'm Feeling Lucky
                    </button>
                </div>
            )}
        </>
    );
};

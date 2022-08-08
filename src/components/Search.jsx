import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../contexts/StateContextProvider";
import { AiOutlineClose } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
    const { setSearchTerm } = useStateContext();
    const [text, setText] = useState("");
    const [debouncedValue] = useDebounce(text, 1000);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue]);

    return (
        <div class='flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md bg-white'>
            <div class='pl-5'>
                <AiOutlineSearch size='1.2em' color='#000' />
            </div>
            <input
                type='text'
                onChange={(e) => setText(e.target.value)}
                value={text}
                class='w-full text-black rounded-full py-[14px] pl-4 outline-none'
            />
            <div class='pr-5'>
                {text !== "" ? (
                    <button
                        type='button'
                        onClick={() => {
                            setText("");
                        }}
                        className='mt-1'
                    >
                        <AiOutlineClose color='#000' size='1.2em' />
                    </button>
                ) : (
                    <BiMicrophone color='#5C8AF0' size='1.3em' />
                )}
            </div>
        </div>
    );
};

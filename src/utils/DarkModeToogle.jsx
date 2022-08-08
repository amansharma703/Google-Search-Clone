import React from "react";
import { useStateContext } from "../contexts/StateContextProvider";

const DarkModeToogle = () => {
    const { darkTheme, setDarkTheme } = useStateContext();

    return (
        <button
            type='button'
            onClick={() => setDarkTheme(!darkTheme)}
            className='text-xl dark:bg-gray-50  bg-white border rounded-full px-1 py-1 hover:shadow-lg '
        >
            {darkTheme ? "💡" : "🌙"}
        </button>
    );
};

export default DarkModeToogle;

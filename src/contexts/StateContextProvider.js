import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (url) => {
        setLoading(true);

        console.log(`${baseUrl}${url}`);

        const res = await fetch(`${baseUrl}${url}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            },
        });

        const data = await res.json();

        console.log("🚀 ~ file: StateContextProvider.js ~ line 23 ~ getResults ~ dḁta", data);
        setResults(data);
        setLoading(false);
    };

    return <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);

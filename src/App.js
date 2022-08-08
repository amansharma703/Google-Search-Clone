import React, { useState } from "react";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import AppRoutes from "./routes";
import { useLocation } from "react-router-dom";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const location = useLocation();

    return (
        <div className={darkTheme ? "dark" : ""}>
            <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
                {!(location.pathname === "/") && <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />}
                <AppRoutes />
                {!(location.pathname === "/") && <Footer />}
            </div>
        </div>
    );
};

export default App;

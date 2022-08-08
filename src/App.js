import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import AppRoutes from "./routes";
import { useLocation } from "react-router-dom";
import { useStateContext } from "./contexts/StateContextProvider";

const App = () => {
    const location = useLocation();
    const { darkTheme } = useStateContext();

    return (
        <div className={darkTheme ? "dark" : ""}>
            <div className='dark:bg-gray-900  dark:text-gray-200 black min-h-screen flex flex-col '>
                {!(location.pathname === "/") && <Navbar />}
                <AppRoutes />
                <Footer />
            </div>
        </div>
    );
};

export default App;

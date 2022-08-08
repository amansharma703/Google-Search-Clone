import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

import { Results } from "../components/Results";

const AppRoutes = () => (
    <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/search' element={<Results />} />

        <Route path='/image' element={<Results />} />

        <Route path='/news' element={<Results />} />

        <Route path='/video' element={<Results />} />
    </Routes>
);
export default AppRoutes;

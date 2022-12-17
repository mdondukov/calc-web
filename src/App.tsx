import React from "react";
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Region from "./pages/Region";
import Altitude from "./pages/Altitude";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="region" element={<Region/>}/>
                <Route path="altitude" element={<Altitude/>}/>
            </Route>
        </Routes>
    );
}

export default App;

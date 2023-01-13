import React from "react";
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Poll from "./pages/Poll";
import Radar from "./pages/Radar";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="poll" element={<Poll/>}/>
                <Route path="radar" element={<Radar/>}/>
            </Route>
        </Routes>
    );
}

export default App;

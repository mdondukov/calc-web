import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayout: React.FC = () => {
    return (
        <div className="py-10">
            <div className="w-4/5 mx-auto">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout
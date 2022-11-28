import React from "react";
import {AiOutlineRead} from "react-icons/ai";

import {Link} from "react-router-dom";

export const InstButton: React.FC = () => {
    return (
        <Link to="/instruction" className="block flex items-center">
            <div className="flex-none mr-2">
                <AiOutlineRead size={34} className="text-blue-800"/>
            </div>
            <div className="flex-auto font-bold text-blue-800 uppercase align-middle">
                Очень краткая инструкция
            </div>
        </Link>
    )
}
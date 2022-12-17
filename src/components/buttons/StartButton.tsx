import React from "react";
import {Link} from "react-router-dom";

export const StartButton: React.FC = () => {
    return (
        <Link
            to="/region"
            className="text-2xl bg-lime-500 hover:opacity-90 text-white font-bold uppercase rounded-xl px-24 py-3"
        >
            Начать
        </Link>
    )
}
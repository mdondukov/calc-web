import React from "react";
import {Link} from "react-router-dom";

import logoSvg from "../assets/img/logo_green.svg";
import partnersPng from "../assets/img/partners.png";

export const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-12">
            <Link to="/">
                <img
                    src={logoSvg}
                    alt="Проект ЭД 'БИОМ' 'Устойчивость молодежи к изменению климата'"
                    className="w-[240px]"
                />
            </Link>
            <img
                src={partnersPng}
                alt="Партнеры проекта"
                className="w-[420px]"
            />
        </div>
    )
}
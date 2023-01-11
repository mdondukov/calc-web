import React from "react"

import logoSvg from "../assets/img/logo_green.svg"

export const Logo: React.FC = () => {
    return (
        <div className="w-[300px]">
            <img src={logoSvg} alt="Проект ЭД 'БИОМ' 'Устойчивость молодежи к изменению климата'"/>
        </div>
    )
}
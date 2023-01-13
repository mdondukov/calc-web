import React from "react";
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";

import logoSvg from "../assets/img/logo_green.svg";
import partnersPng from "../assets/img/partners.png";

export const Header: React.FC = () => {
    const intl = useIntl()
    return (
        <div className="flex justify-between items-center mb-12">
            <Link to="/">
                <img
                    src={logoSvg}
                    alt={intl.formatMessage({id: "label.project.name"})}
                    className="w-[240px]"
                />
            </Link>
            <img
                src={partnersPng}
                alt={intl.formatMessage({id: "label.project.partners"})}
                className="w-[420px]"
            />
        </div>
    )
}
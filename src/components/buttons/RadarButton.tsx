import React from "react";
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";

interface RadarButtonProps {
    onClick: () => void
}

export const RadarButton: React.FC<RadarButtonProps> = ({onClick}) => {
    const intl = useIntl()

    return (
        <Link
            to="/radar"
            onClick={onClick}
            className="inline-flex items-center h-12 px-14 text-lg bg-blue-800 hover:bg-blue-700 text-white font-bold uppercase rounded-xl"
        >
            {intl.formatMessage({id: "label.result"})}
        </Link>
    )
}
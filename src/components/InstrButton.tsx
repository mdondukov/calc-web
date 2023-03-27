import React from "react";
import {useIntl} from "react-intl";
import {AiOutlineRead} from "react-icons/ai";
import {Link} from "react-router-dom";

interface InstrButtonProps {
    path: string
}

export const InstrButton: React.FC<InstrButtonProps> = ({path}: InstrButtonProps) => {
    const intl = useIntl()

    return (
        <Link
            to={path}
            className="block flex items-center text-blue-800 hover:opacity-75"
        >
            <div className="flex-none mr-2">
                <AiOutlineRead size={34}/>
            </div>
            <div className="flex-auto text-sm font-bold uppercase align-middle">
                {intl.formatMessage({id: "label.instruction"})}
            </div>
        </Link>
    )
}
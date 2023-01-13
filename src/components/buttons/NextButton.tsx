import React from "react";
import {useIntl} from "react-intl";

import {useStores} from "../../hooks/use-stores";

interface NextButtonProps {
    nextStepId: number
}

export const NextButton: React.FC<NextButtonProps> = ({nextStepId}) => {
    const intl = useIntl()
    const {setActiveStep} = useStores().stepStore

    return <button
        type="button"
        onClick={() => setActiveStep(nextStepId)}
        className="inline-flex items-center h-12 px-14 text-lg bg-lime-500 hover:bg-lime-400 text-white font-bold uppercase rounded-xl"
    >
        {intl.formatMessage({id: "label.next"})}
    </button>
}
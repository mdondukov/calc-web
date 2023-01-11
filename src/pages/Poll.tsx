import React from "react";

import {Altitude, Navigation, Questions, Region} from "../components";
import {observer} from "mobx-react-lite";
import {useStores} from "../hooks/use-stores";
import {StepType} from "../store/StepStore";

const Poll: React.FC = observer(() => {
    const {active} = useStores().stepStore

    return (
        <>
            <Navigation/>
            {getComponent(active.type)}
        </>
    )
})

export default Poll

function getComponent(type: StepType) {
    switch (type) {
        case StepType.REGION:
            return <Region/>
        case StepType.ALTITUDE:
            return <Altitude/>
        case StepType.INDICATOR:
            return <Questions/>
    }
}


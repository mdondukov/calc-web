import React from "react";
import {observer} from "mobx-react-lite";

import {Loader, Navigation, Questions, Radar, Region} from "../components";
import {useStores} from "../hooks/use-stores";
import {fetchSteps} from "../http/api";
import {IStep, StepType} from "../types/step";

const Poll: React.FC = observer(() => {
    const {stepStore} = useStores()

    React.useEffect(() => {
        stepStore.setLoading(true)
        fetchSteps().then(response => {
            stepStore.setSteps(response.data)
            stepStore.setActive(response.data[0].id)
            stepStore.setLoading(false)
        }).catch(error => {
            stepStore.setError(error)
            stepStore.setLoading(false)
        })
    }, [])

    React.useEffect(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}))

    if (stepStore.isLoading) {
        return <Loader/>
    }

    if (stepStore.error) {
        throw Error(stepStore.error)
    }

    return (
        <>
            <Navigation/>
            {getComponent(stepStore.activeStep)}
        </>
    )
})

export default Poll

function getComponent(activeStep: IStep) {
    switch (activeStep.type) {
        case StepType.REGION:
            return <Region/>
        case StepType.ASSESSMENT:
            return <Questions/>
        case StepType.RADAR:
            return <Radar/>
    }
}


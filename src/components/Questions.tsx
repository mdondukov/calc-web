import React from "react";
import {observer} from "mobx-react-lite";

import {Loader, NextButton, Question} from "./index";
import {useStores} from "../hooks/use-stores";
import {fetchAssessment} from "../http/api";

export const Questions: React.FC = observer(() => {
    const {questionStore, stepStore} = useStores()

    React.useEffect(() => {
        questionStore.setLoading(true)
        fetchAssessment().then(response => {
            questionStore.setQuestions(response.data)
            questionStore.setLoading(false)
        }).catch(error => {
            questionStore.setError(error)
            questionStore.setLoading(false)
        })
    }, [])

    if (questionStore.isLoading) {
        return <Loader/>
    }

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">{stepStore.activeStep.name}</h1>
            <div className="max-w-lg sm:mx-auto md:max-w-none mb-12">
                <div className="grid grid-cols-1 gap-y-12">
                    {
                        questionStore.getQuestions(stepStore.activeStep.id).map((question, index) =>
                            <Question key={question.id}{...{question: question, num: index + 1}}/>
                        )
                    }
                </div>
            </div>
            {
                stepStore.activeStep.nextStepId && (
                    <NextButton
                        nextStepId={stepStore.activeStep.nextStepId}
                        enable={stepStore.isCompleteStep(stepStore.activeStep.id)}
                    />
                )
            }
        </>
    )
})

import React from "react";
import {observer} from "mobx-react-lite";

import {useStores} from "../hooks/use-stores";
import {IAnswerSelect, IQuestion} from "../types/question";

interface QuestionProps {
    question: IQuestion
    num: number
}

export const Question: React.FC<QuestionProps> = observer(({question, num}) => {
    const {stepStore, questionStore} = useStores()

    return (
        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:shrink-0">
                <span className="text-lg text-blue-900 font-semibold">{num}</span>
            </div>
            <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-medium text-gray-900">{question.content}</p>
                <div className="inline-flex rounded-lg shadow-sm mt-6" role="group">
                    {
                        question.answers.map((answer, index) =>
                            <button key={answer.id}
                                    type="button"
                                    onClick={() => {
                                        questionStore.setSelectAnswer(stepStore.activeStep.id, question.id, answer.id)
                                        if (questionStore.isAllQuestionsComplete(stepStore.activeStep.id)) {
                                            stepStore.setCompleteStep(stepStore.activeStep.id)
                                        }
                                    }}
                                    className={
                                        getButtonClass(index, question.answers.length - 1) +
                                        getButtonSelectClass(question.id, answer.id, questionStore.selectAnswers)
                                    }>
                                {answer.content}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

const getButtonClass = (currentIndex: number, lastIndex: number) => {
    const className = `min-w-[160px] px-4 py-2 border-t border-b font-medium text-gray-900 hover:text-lime-800 ` +
        `bg-lime-200 border-lime-500 hover:bg-lime-300`

    if (currentIndex === 0)
        return className + " border-l border-r rounded-l-lg"

    else if (currentIndex === lastIndex)
        return className + " border-r rounded-r-lg"

    else if (currentIndex === 0 && lastIndex === 1)
        return className + " border-l border-r rounded-lg"

    else
        return className + " border-r"
}

const getButtonSelectClass = (questionId: number, answerId: number, selectAnswers: IAnswerSelect[]): string => {
    return  selectAnswers.find(answer => answer.questionId === questionId && answer.answerId === answerId)
        ? " z-20 ring-1 ring-lime-700 text-lime-800 bg-lime-400" : ""
}
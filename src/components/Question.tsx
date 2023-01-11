import React from "react";
import {observer} from "mobx-react-lite";

import {IQuestion} from "../store/StepStore";
import {useStores} from "../hooks/use-stores";

interface QuestionProps {
    question: IQuestion,
    num: number
}

export const Question: React.FC<QuestionProps> = observer(({question, num}) => {
    const {active, setSelectAnswer} = useStores().stepStore

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
                                    onClick={() => setSelectAnswer(active.id, question.id, answer.id)}
                                    className={
                                        getButtonClass(index, question.answers.length - 1) +
                                        getButtonSelectClass(answer.id, question.selectAnswerId)
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

const getButtonSelectClass = (currentAnswerId: number, selectAnswerId: number) => {
    return currentAnswerId === selectAnswerId ? " z-20 ring-1 ring-lime-700 text-lime-800 bg-lime-400" : ""
}
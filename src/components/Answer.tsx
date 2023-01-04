import React from "react";

import {AnswerType, SelectType} from "../pages/Questions";

type AnswerProps = {
    data: AnswerType,
    index: {
        current: number,
        last: number
    },
    questionId: number,
    selects: SelectType[],
    setSelects: React.Dispatch<React.SetStateAction<SelectType[]>>
}

const getButtonClass = (currentIndex: number, lastIndex: number) => {
    const baseClassName =
        `min-w-[160px] px-4 py-2 border-t border-b ` +
        `font-medium text-gray-900 hover:text-lime-800 ` +
        `bg-lime-200 border-lime-500 hover:bg-lime-300 `

    let additionalClassName

    if (currentIndex === 0)
        additionalClassName = " border-l border-r rounded-l-lg"

    else if (currentIndex === lastIndex)
        additionalClassName = " border-r rounded-r-lg"

    else if (currentIndex === 0 && lastIndex === 1)
        additionalClassName = " border-l border-r rounded-lg"

    else
        additionalClassName = " border-r"

    return baseClassName + additionalClassName
}

const getButtonSelClass = (selects: SelectType[], questionId: number, answerId: number) => {
    return selects
        .find(sel => sel.questionId === questionId && sel.answerId === answerId)
        ? ` z-10 ring-1 ring-lime-700 text-lime-800 bg-lime-400` : ``
}

const updateSelect = (selects: SelectType[], questionId: number, answerId: number) => {
    const updated = selects.filter(select => select.questionId !== questionId)
    updated.push({questionId: questionId, answerId: answerId})
    return updated
}

export const Answer: React.FC<AnswerProps> = (answer: AnswerProps) => {
    return (
        <button key={answer.data.id}
                type="button"
                onClick={() => answer.setSelects(selAnswers =>
                    updateSelect(selAnswers, answer.questionId, answer.data.id)
                )}
                className={getButtonClass(answer.index.current, answer.index.last) +
                    getButtonSelClass(answer.selects, answer.questionId, answer.data.id)}>
            {answer.data.content}
        </button>
    )
}
import React from "react";

import {AnswerType, QuestionType, SelectType} from "../pages/Questions";
import {Answer} from "./Answer";

type QuestionProps = {
    data: QuestionType,
    selects: SelectType[],
    setSelects: React.Dispatch<React.SetStateAction<SelectType[]>>
}

export const Question: React.FC<QuestionProps> = (question: QuestionProps) => {
    return (
        <div key={question.data.id} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:shrink-0">
                <span className="text-lg text-blue-900 font-semibold">{question.data.num}</span>
            </div>
            <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-medium text-gray-900">{question.data.content}</p>
                <div className="inline-flex rounded-lg shadow-sm mt-6" role="group">
                    {
                        question.data.answers.map((answer: AnswerType, index: number) =>
                            <Answer key={answer.id} {
                                ...{
                                    data: answer,
                                    index: {
                                        current: index,
                                        last: question.data.answers.length - 1
                                    },
                                    questionId: question.data.id,
                                    selects: question.selects,
                                    setSelects: question.setSelects
                                }
                            }/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
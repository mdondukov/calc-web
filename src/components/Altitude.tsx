import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import {observer} from "mobx-react-lite";
import {useIntl} from "react-intl";

import {NextButton} from "./index";
import {IAnswer} from "../store/StepStore";
import {useStores} from "../hooks/use-stores";
import altitudePng from "../assets/img/altitude.png"

export const Altitude: React.FC = observer(() => {
    const intl = useIntl()
    const {active, setSelectAnswer, fetchAnswer, setIncompleteStep} = useStores().stepStore
    const question = active.questions[0]
    const [answer, setAnswer] = React.useState<IAnswer | null>(null)

    React.useEffect(() => {
        if (question.selectAnswerId > -1) {
            setAnswer(fetchAnswer(active.id, question.id, question.selectAnswerId))
        }
    }, [question.selectAnswerId, question.id, fetchAnswer, active.id])

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                {question.content}
            </h1>
            <div className="w-full relative">
                <div className="w-10/12 mx-auto">
                    <img src={altitudePng} alt={intl.formatMessage({id: "label.altitude"})}/>
                </div>
                {
                    (!answer || answer.id === 1) && (
                        <span
                            onClick={() => {
                                setSelectAnswer(active.id, question.id, 1)
                                setAnswer(fetchAnswer(active.id, question.id, 1))
                            }}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-slate-800 hover:bg-slate-600 rounded-full absolute top-0 left-1/2"
                        >В
                        </span>
                    )
                }
                {
                    (!answer || answer.id === 2) && (
                        <span
                            onClick={() => {
                                setSelectAnswer(active.id, question.id, 2)
                                setAnswer(fetchAnswer(active.id, question.id, 2))
                            }}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-blue-800 hover:bg-blue-600 rounded-full absolute top-1/2 left-1/2"
                        >П
                        </span>
                    )
                }
                {
                    (!answer || answer.id === 3) && (
                        <span
                            onClick={() => {
                                setSelectAnswer(active.id, question.id, 3)
                                setAnswer(fetchAnswer(active.id, question.id, 3))
                            }}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-lime-600 hover:bg-lime-400 rounded-full absolute bottom-0 left-1/2"
                        >Д
                        </span>
                    )
                }
                {
                    answer && (
                        <div className="absolute w-2/5 rounded-xl bg-white/80 p-10 top-0 left-0 shadow-2xl">
                            <AiOutlineClose
                                size={22}
                                onClick={() => {
                                    setSelectAnswer(active.id, question.id, -1)
                                    setIncompleteStep(active.id)
                                    setAnswer(null)
                                }}
                                className="text-blue-800 hover:opacity-75 absolute top-4 right-4 cursor-pointer"
                            />
                            <h2 className="text-2xl text-lime-500 font-bold uppercase mb-6">{answer.content}</h2>
                            <p className="break-normal mb-6">{answer.desc}</p>
                            {
                                active.nextStepId && <NextButton nextStepId={active.nextStepId}/>
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
})
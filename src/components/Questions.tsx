import React from "react";
import {observer} from "mobx-react-lite";

import {NextButton, Question} from "./index";
import {useStores} from "../hooks/use-stores";

export const Questions: React.FC = observer(() => {
    const {active} = useStores().stepStore

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">{active.name}</h1>
            <div className="max-w-lg sm:mx-auto md:max-w-none mb-12">
                <div className="grid grid-cols-1 gap-y-12">
                    {
                        active.questions.map((question, index) =>
                            <Question key={question.id} {...{question: question, num: index + 1}}/>
                        )
                    }
                </div>
            </div>
            {
                (active.nextStepId && active.isComplete) && <NextButton nextStepId={active.nextStepId}/>
            }
        </>
    )
})

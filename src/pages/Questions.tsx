import React from "react";
import {useParams} from "react-router-dom";

import {MainButton, Question} from "../components";

type GroupType = {
    id: number,
    name: string,
    questions: QuestionType[],
    num: number
}

export type QuestionType = {
    id: number,
    content: string,
    answers: AnswerType[],
    num: number
}

export type AnswerType = {
    id: number,
    content: string
}

export type SelectType = {
    questionId: number,
    answerId: number
}

const Questions: React.FC = () => {
    const {groupId} = useParams()
    const [selects, setSelects] = React.useState<SelectType[]>([])
    const [group, setGroup] = React.useState<GroupType | null>(null)

    React.useEffect(() => {
        const found = groups.find(g => g.id.toString() === groupId)
        if (found) setGroup(found)
    }, [groupId])

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                {group?.num + `. ` + group?.name}
            </h1>
            <div className="max-w-lg sm:mx-auto md:max-w-none mb-12">
                <div className="grid grid-cols-1 gap-y-12">
                    {
                        group?.questions.map((question: QuestionType) =>
                            <Question key={question.id} {
                                ...{
                                    data: question,
                                    selects: selects,
                                    setSelects: setSelects
                                }
                            }/>
                        )
                    }
                </div>
            </div>
            {
                group?.questions.length === selects.length && <MainButton path="/radar" name="Далее"/>
            }
        </>
    )
}

const groups: GroupType[] = [
    {
        id: 1,
        name: "Самоорганизация и потенциал местного сообщества",
        questions: [
            {
                id: 1,
                content: "Существует ли в местном сообществе план мероприятий по вопросам изменения климата, является ли эта деятельность одной из приоритетных?",
                answers: [
                    {
                        id: 1,
                        content: "0 - нет"
                    },
                    {
                        id: 2,
                        content: "1"
                    },
                    {
                        id: 3,
                        content: "2"
                    },
                    {
                        id: 4,
                        content: "3 - несколько"
                    }
                ],
                num: 1
            },
            {
                id: 2,
                content: "Принимают ли участие в разработке плана мероприятий по ИК молодежь, женщины, бедное население, уязвимые группы?",
                answers: [
                    {
                        id: 1,
                        content: "до 10%"
                    },
                    {
                        id: 2,
                        content: "30%"
                    },
                    {
                        id: 3,
                        content: "50%"
                    },
                    {
                        id: 4,
                        content: "80% и более"
                    }
                ],
                num: 2
            }
        ],
        num: 1
    },
    {
        id: 2,
        name: "Сельское хозяйство. Животноводство",
        questions: [
            {
                id: 1,
                content: "Существует ли в местном сообществе план мероприятий по вопросам изменения климата, является ли эта деятельность одной из приоритетных?",
                answers: [
                    {
                        id: 1,
                        content: "0 - нет"
                    },
                    {
                        id: 2,
                        content: "1"
                    },
                    {
                        id: 3,
                        content: "2"
                    },
                    {
                        id: 4,
                        content: "3 - несколько"
                    }
                ],
                num: 1
            },
            {
                id: 2,
                content: "Принимают ли участие в разработке плана мероприятий по ИК молодежь, женщины, бедное население, уязвимые группы?",
                answers: [
                    {
                        id: 1,
                        content: "до 10%"
                    },
                    {
                        id: 2,
                        content: "30%"
                    },
                    {
                        id: 3,
                        content: "50%"
                    },
                    {
                        id: 4,
                        content: "80% и более"
                    }
                ],
                num: 2
            }
        ],
        num: 2
    },
    {
        id: 3,
        name: "Здоровье населения",
        questions: [
            {
                id: 1,
                content: "Существует ли в местном сообществе план мероприятий по вопросам изменения климата, является ли эта деятельность одной из приоритетных?",
                answers: [
                    {
                        id: 1,
                        content: "0 - нет"
                    },
                    {
                        id: 2,
                        content: "1"
                    },
                    {
                        id: 3,
                        content: "2"
                    },
                    {
                        id: 4,
                        content: "3 - несколько"
                    }
                ],
                num: 1
            },
            {
                id: 2,
                content: "Принимают ли участие в разработке плана мероприятий по ИК молодежь, женщины, бедное население, уязвимые группы?",
                answers: [
                    {
                        id: 1,
                        content: "до 10%"
                    },
                    {
                        id: 2,
                        content: "30%"
                    },
                    {
                        id: 3,
                        content: "50%"
                    },
                    {
                        id: 4,
                        content: "80% и более"
                    }
                ],
                num: 2
            }
        ],
        num: 3
    }
]

export default Questions

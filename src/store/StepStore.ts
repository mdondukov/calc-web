import {makeAutoObservable} from "mobx";

export interface IStep {
    id: number
    name: string
    questions: IQuestion[]
    type: StepType
    nextStepId: number | null,
    isComplete: boolean
}

export enum StepType {
    REGION = "REGION",
    ALTITUDE = "ALTITUDE",
    INDICATOR = "INDICATOR"
}

export interface IQuestion {
    id: number
    content: string
    answers: IAnswer[]
    selectAnswerId: number
}

export interface IAnswer {
    id: number
    content: string
    desc: string | null
}

export class StepStore {
    public steps: IStep[] = [
        {
            id: 1,
            name: "Регион проживания",
            questions: [
                {
                    id: 1,
                    content: "В какой области вы проживаете?",
                    answers: [
                        {
                            id: 1,
                            content: "Чуйская область",
                            desc: "Чуйская область находится в северной части Киргизии, образована как Фрунзенская область 21 ноября 1939 года Указом Президиума Верховного Совета СССР, упразднена в 1959 году. Была восстановлена из районов республиканского подчинения в 1990 году под современным названием."
                        },
                        {
                            id: 2,
                            content: "Иссык-Кульская область",
                            desc: "Иссык-Кульская область самый восточный регион Киргизии. Образована Указом Президиума Верховного Совета СССР от 21 ноября 1939 года с центром в городе Пржевальск (в область был преобразован Иссык-Кульский округ)."
                        },
                        {
                            id: 3,
                            content: "Нарынская область",
                            desc: "Нарынская область находится в центральной части Киргизии. Занимает долины и склоны гор Внутреннего Тянь-Шаня и является самым крупным регионом в стране."
                        },
                        {
                            id: 4,
                            content: "Баткенская область",
                            desc: "Административный центр области — Баткен. На востоке она граничит с Ошской областью, на юге, западе и севере — с Таджикистаном, а на северо-востоке — с Узбекистаном."
                        },
                        {
                            id: 5,
                            content: "Жалал-Абадская область",
                            desc: "Одна из административно-территориальных единиц Кыргызской Республики, расположенная на юго-западе страны. Образована Указом Президиума Верховного Совета СССР от 21 ноября 1939 года. Административный центр области — город Джалал-Абад."
                        },
                        {
                            id: 6,
                            content: "Таласская область",
                            desc: "Таласская область — самая маленькая область Киргизии, находится в северо-западной части страны."
                        },
                        {
                            id: 7,
                            content: "Ошская область",
                            desc: "Ошская область — административная единица Киргизской Республики. Образована Указом Президиума Верховного Совета СССР от 21 ноября 1939 года. Административный центр — город Ош (в состав области не входит)."
                        }
                    ],
                    selectAnswerId: -1
                }
            ],
            type: StepType.REGION,
            nextStepId: 2,
            isComplete: false
        },
        {
            id: 2,
            name: "Населенный пункт",
            questions: [
                {
                    id: 1,
                    content: "На какой высоте над уровнем моря, располагается ваш населенный пункт?",
                    answers: [
                        {
                            id: 1,
                            content: "Высокогорная зона",
                            desc: "В широком понимании — высокогорная область выше границы леса и криволесий. В понимании ботаников — типичный для умеренного и субтропического поясов пояс субальпийских и альпийских лугов и стелющихся кустарников, перемежающихся с каменными осыпями."
                        },
                        {
                            id: 2,
                            content: "Предгорная зона",
                            desc: "Предгорная зона — территория (страна, край, регион) перед какими-то горами или у каких-либо гор (горы), например Прикарпатье, Предальпы и так далее"
                        },
                        {
                            id: 3,
                            content: "Долинная зона",
                            desc: "Долинная зона — отрицательная, линейно-вытянутая форма рельефа с однообразным падением. Образуется обычно в результате эрозионной деятельности текучей воды. Речная вода, смывая берега и подошву склонов, постепенно образует речную долину."
                        }
                    ],
                    selectAnswerId: -1
                }
            ],
            type: StepType.ALTITUDE,
            nextStepId: 3,
            isComplete: false
        },
        {
            id: 3,
            name: "Самоорганизация и потенциал местного сообщества",
            questions: [
                {
                    id: 1,
                    content: "Существует ли в местном сообществе план мероприятий по вопросам изменения климата, является ли эта деятельность одной из приоритетных?",
                    answers: [
                        {
                            id: 1,
                            content: "0 - нет",
                            desc: null
                        },
                        {
                            id: 2,
                            content: "1",
                            desc: null
                        },
                        {
                            id: 3,
                            content: "2",
                            desc: null
                        },
                        {
                            id: 4,
                            content: "3 - несколько",
                            desc: null
                        }
                    ],
                    selectAnswerId: -1
                },
                {
                    id: 2,
                    content: "Принимают ли участие в разработке плана мероприятий по ИК молодежь, женщины, бедное население, уязвимые группы?",
                    answers: [
                        {
                            id: 1,
                            content: "до 10%",
                            desc: null
                        },
                        {
                            id: 2,
                            content: "30%",
                            desc: null
                        },
                        {
                            id: 3,
                            content: "50%",
                            desc: null
                        },
                        {
                            id: 4,
                            content: "80% и более",
                            desc: null
                        }
                    ],
                    selectAnswerId: -1
                }
            ],
            type: StepType.INDICATOR,
            nextStepId: 4,
            isComplete: false
        },
        {
            id: 4,
            name: "Сельское хозяйство",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 5,
            isComplete: false
        },
        {
            id: 5,
            name: "Энергетика и энергоэффективность",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 6,
            isComplete: false
        },
        {
            id: 6,
            name: "Здоровье населения",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 7,
            isComplete: false
        },
        {
            id: 7,
            name: "Естественная среда",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 8,
            isComplete: false
        },
        {
            id: 8,
            name: "Инфраструктура, туризм, транспорт",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 9,
            isComplete: false
        },
        {
            id: 9,
            name: "Вода, санитария, гигиена",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 10,
            isComplete: false
        },
        {
            id: 10,
            name: "Среда населенных пунктов",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 11,
            isComplete: false
        },
        {
            id: 11,
            name: "Чрезвычайные ситуации",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: 12,
            isComplete: false
        },
        {
            id: 12,
            name: "Отходы",
            questions: [],
            type: StepType.INDICATOR,
            nextStepId: null,
            isComplete: false
        }
    ]

    public active: IStep = this.steps[0]

    constructor() {
        makeAutoObservable(this)
    }

    public setActiveStep = (nextStepId: number) => {
        const nextStep = this.steps.find(step => step.id === nextStepId)

        if (nextStep) {
            this.active = nextStep
        }
    }

    public setSelectAnswer = (stepId: number, questionId: number, answerId: number) => {
        this.steps = this.steps.map(step => {
            if (step.id === stepId) {
                step.questions.map(question => {
                    if (question.id === questionId) {
                        question.selectAnswerId = answerId
                    }
                    return question
                })

                const completed = step.questions.filter(question => question.selectAnswerId !== -1)

                if (step.questions.length === completed.length) {
                    step.isComplete = true
                }
            }
            return step
        })
    }

    public setIncompleteStep = (stepId: number) => {
        this.steps = this.steps.map(step => {
            if (step.id === stepId) {
                step.isComplete = false
            }
            return step
        })
    }

    public fetchAnswer = (stepId: number, questionId: number, answerId: number): IAnswer => {
        const step = this.steps.find(s => s.id === stepId)
        if (!step) throw Error(`Step not found (id: ${stepId})`)

        const question = step.questions.find(q => q.id === questionId)
        if (!question) throw Error(`Question not found (id: ${questionId})`)

        const answer = question.answers.find(a => a.id === answerId)
        if (!answer) throw Error(`Answer not found (id: ${answerId})`)

        return answer
    }
}
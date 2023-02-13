import {$host} from "./index";
import {IRegionSelect} from "../types/region";
import {IAnswerSelect} from "../types/question";

export const fetchSteps = async () => {
    const {data} = await $host.get('/v1/poll/steps/')
    return data
}

export const fetchRegions = async () => {
    const {data} = await $host.get('/v1/poll/regions/')
    return data
}

export const fetchAssessment = async () => {
    const {data} = await $host.get('/v1/poll/assessment/')
    return data
}

export const fetchIndicators = async (region: IRegionSelect | null, answers: IAnswerSelect[]) => {
    const {data} = await $host.post('/v1/summary/', {region: region, answers: answers})
    return data
}
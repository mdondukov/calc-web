import {$host} from "./index";
import {IRegionSelect} from "../types/region";
import {IAnswerSelect} from "../types/question";

const config = (locale: string) => {
  return {
      headers: {
          locale: locale as string
      }
  }
}

export const fetchSteps = async (locale: string) => {
    const {data} = await $host.get('/v1/poll/steps/', config(locale))
    return data
}

export const fetchRegions = async (locale: string) => {
    const {data} = await $host.get('/v1/poll/regions/', config(locale))
    return data
}

export const fetchAssessment = async (locale: string) => {
    const {data} = await $host.get('/v1/poll/assessment/', config(locale))
    return data
}

export const fetchIndicators = async (region: IRegionSelect | null, answers: IAnswerSelect[]) => {
    const {data} = await $host.post('/v1/poll/summary/', {region: region, answers: answers})
    return data
}

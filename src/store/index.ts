import {createContext} from "react";
import {StepStore} from "./StepStore";
import {IndicatorStore} from "./IndicatorStore";

export const rootStoreContext = createContext({
    stepStore: new StepStore(),
    indicatorStore: new IndicatorStore()
})
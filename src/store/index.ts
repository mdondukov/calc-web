import {createContext} from "react";
import {StepStore} from "./StepStore";
import {IndicatorStore} from "./IndicatorStore";
import {UIStore} from "./UIStore";

export const rootStoreContext = createContext({
    stepStore: new StepStore(),
    indicatorStore: new IndicatorStore(),
    uiStore: new UIStore()
})
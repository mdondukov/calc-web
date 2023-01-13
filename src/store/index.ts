import {createContext} from "react";
import {StepStore} from "./StepStore";
import {IndicatorStore} from "./IndicatorStore";
import {UIStore} from "./UIStore";
import {MessageStore} from "./MessageStore";

export const rootStoreContext = createContext({
    stepStore: new StepStore(),
    indicatorStore: new IndicatorStore(),
    uiStore: new UIStore(),
    messageStore: new MessageStore()
})
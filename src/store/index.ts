import {createContext} from "react";
import {StepStore} from "./StepStore";

export const rootStoreContext = createContext({
    stepStore: new StepStore()
})
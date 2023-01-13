import {makeAutoObservable, observable} from "mobx";

export const DEFAULT_LOCALE = "ru"

export interface IWindowDimensions {
    width: number
    height: number
}

export class UIStore {
    public locale: string = DEFAULT_LOCALE

    public windowDimensions: IWindowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    constructor() {
        makeAutoObservable(this, {windowDimensions: observable.struct})
        window.onresize = () => {
            this.setWindowDimensions({width: window.innerWidth, height: window.innerHeight})
        }
    }

    private setWindowDimensions = (dimensions: IWindowDimensions) => {
        this.windowDimensions = dimensions
    }
}
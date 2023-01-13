import {makeAutoObservable} from "mobx";

import messageRu from "../i18n/messages-ru.json"
import messageKg from "../i18n/messages-kg.json"

export class MessageStore {
    public messages: { [key: string]: { [id: string]: string } } = {
        ru: messageRu,
        kg: messageKg
    }

    constructor() {
        makeAutoObservable(this)
    }
}
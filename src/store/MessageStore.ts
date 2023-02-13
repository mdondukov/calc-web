import {makeAutoObservable} from "mobx";

import messageRu from "../i18n/messages-ru.json"
import messageKg from "../i18n/messages-kg.json"

export class MessageStore {
    private readonly _messages: { [key: string]: { [id: string]: string } }

    constructor() {
        this._messages = {
            ru: messageRu,
            kg: messageKg
        }

        makeAutoObservable(this)
    }

    public get messages() {
        return this._messages
    }
}
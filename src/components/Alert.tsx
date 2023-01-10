import React from "react";
import {AiOutlineClose} from "react-icons/ai";

export interface IAlert {
    type: AlertType
    name: string
    desc: string
}

interface AlertProps {
    alert: IAlert
    setOpen: (open: boolean) => void
}

export enum AlertType {
    ERROR, WARN
}

export const Alert: React.FC<AlertProps> = ({alert, setOpen}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 rounded-xl bg-white p-10 shadow-2xl">
                <AiOutlineClose
                    size={22}
                    onClick={() => setOpen(false)}
                    className="text-blue-800 hover:opacity-75 absolute top-4 right-4 cursor-pointer"
                />
                <h1
                    className={
                        `text-sm font-bold uppercase mb-4 ` +
                        getNameColor(alert.type)
                    }
                >
                    {alert.name}
                </h1>
                <p className="text-sm">
                    {alert.desc}
                </p>
            </div>
        </div>
    )
}

const getNameColor = (type: AlertType): string => {
    switch (type) {
        case AlertType.ERROR:
            return "text-red-600"
        case AlertType.WARN:
            return "text-blue-800"
    }
}
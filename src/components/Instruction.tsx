import React from "react";

import {AiOutlineClose, AiOutlineRead} from "react-icons/ai";
import jamInstSvg from "../assets/img/jamilya_instr.svg";

export const Instruction: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="block flex items-center text-blue-800 hover:opacity-75"
            >
                <div className="flex-none mr-2">
                    <AiOutlineRead size={34}/>
                </div>
                <div className="flex-auto font-bold uppercase align-middle">
                    Очень краткая инструкция
                </div>
            </button>
            {
                open && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md">
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 rounded-xl bg-white p-12"
                        >
                            <AiOutlineClose
                                size={24}
                                onClick={() => setOpen(false)}
                                className="text-blue-800 hover:opacity-75 absolute top-4 right-4 cursor-pointer"
                            />
                            <div className="lg:grid lg:grid-cols-12">
                                <div className="col-span-8">
                                    <h1 className="text-3xl text-lime-500 font-bold uppercase mb-8">
                                        Как пройти самооценку?
                                    </h1>
                                    <div className="text-lg font-medium text-blue-800 mb-8">
                                        <p className="mb-4">
                                            Самооценка это...состоит из 11 блоков и результата вот тут вы
                                            видите на каком Вы шаге и стрелочка вверх на иконки, которые шаги показывают
                                        </p>
                                        <p className="mb-4">
                                            Вы можете проходить как по отдельным блокам и получить рекомендации,
                                            так и полностью, тогда получите радар уязвимости и перечень мер по всем
                                            блокам самооценки
                                        </p>
                                        <p>
                                            Радар выглядит так: и выноски тут максимальные баллы, тут ваши
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex justify-end">
                                        <img src={jamInstSvg} alt="Джамиля" className="w-[212px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
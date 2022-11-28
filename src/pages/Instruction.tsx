import React from "react";

import {StartButton} from "../components";
import jamInstSvg from "../assets/img/jamilya_instr.svg";

export const Instruction: React.FC = () => {
    return (
        <div className="lg:grid lg:grid-cols-12">
            <div className="col-span-8">
                <h1 className="text-4xl text-lime-500 font-bold uppercase mb-8">
                    Как пройти самооценку?
                </h1>
                <div className="text-lg font-bold text-blue-800 mb-8">
                    <p className="mb-4">
                        Самооценка это...состоит из 11 блоков и результата вот тут вы видите на каком Вы шаге
                        и стрелочка вверх на иконки, которые шаги показывают
                    </p>
                    <p className="mb-4">
                        Вы можете проходить как по отдельным блокам и получить рекомендации, так и полностью,
                        тогда получите радар уязвимости и перечень мер по всем блокам самооценки
                    </p>
                    <p>
                        Радар выглядит так: и выноски тут максимальные баллы, тут ваши
                    </p>
                </div>
                <StartButton/>
            </div>
            <div className="col-span-4">
                <div className="flex justify-end">
                    <img src={jamInstSvg} alt="Джамиля" className="w-[212px]"/>
                </div>
            </div>
        </div>
    )
}

export default Instruction
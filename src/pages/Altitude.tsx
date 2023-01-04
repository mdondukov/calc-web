import React from "react";
import {AiOutlineClose} from "react-icons/ai";

import altitudePng from "../assets/img/altitude.png"
import {MainButton} from "../components";

type AltitudeType = {
    id: number,
    name: string,
    content: string
}

const getAltitude = (id: number): AltitudeType => {
    let altitude = altitudes.find(altitude => altitude.id === id)
    return altitude ? altitude : {id: 0, name: "", content: ""}
}

const Altitude: React.FC = () => {
    const [altitude, setAltitude] = React.useState<AltitudeType>({id: 0, name: "", content: ""})

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                На какой высоте над уровнем моря, располагается ваш населенный пункт?
            </h1>
            <div className="w-full relative">
                <div className="w-10/12 mx-auto">
                    <img src={altitudePng} alt="Высота над уровнем моря"/>
                </div>
                {
                    (altitude.id === 1 || altitude.id === 0) && (
                        <span
                            onClick={() => setAltitude(getAltitude(1))}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-slate-800 hover:bg-slate-600 rounded-full absolute top-0 left-1/2"
                        >В
                        </span>
                    )
                }
                {
                    (altitude.id === 2 || altitude.id === 0) && (
                        <span
                            onClick={() => setAltitude(getAltitude(2))}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-blue-800 hover:bg-blue-600 rounded-full absolute top-1/2 left-1/2"
                        >П
                        </span>
                    )
                }
                {
                    (altitude.id === 3 || altitude.id === 0) && (
                        <span
                            onClick={() => setAltitude(getAltitude(3))}
                            className="cursor-pointer inline-flex items-center justify-center h-14 w-14 text-2xl text-white font-bold border-white border-2 bg-lime-600 hover:bg-lime-400 rounded-full absolute bottom-0 left-1/2"
                        >Д
                        </span>
                    )
                }
                {
                    altitude.id !== 0 && (
                        <div className="absolute w-2/5 rounded-xl bg-white/80 p-10 top-0 left-0">
                            <AiOutlineClose
                                size={22}
                                onClick={() => setAltitude({id: 0, name: "", content: ""})}
                                className="text-blue-800 hover:opacity-75 absolute top-4 right-4 cursor-pointer"
                            />
                            <h2 className="text-2xl text-lime-500 font-bold uppercase mb-6">{altitude.name}</h2>
                            <p className="break-normal mb-6">{altitude.content}</p>
                            <MainButton path="/questions" name="Далее"/>
                        </div>
                    )
                }
            </div>
        </>
    )
}

const altitudes: AltitudeType[] = [
    {
        id: 1,
        name: "Высокогорная зона",
        content: "В широком понимании — высокогорная область выше границы леса и криволесий. В понимании ботаников — типичный для умеренного и субтропического поясов пояс субальпийских и альпийских лугов и стелющихся кустарников, перемежающихся с каменными осыпями."
    },
    {
        id: 2,
        name: "Предгорная зона",
        content: "Предгорная зона — территория (страна, край, регион) перед какими-то горами или у каких-либо гор (горы), например Прикарпатье, Предальпы и так далее"
    },
    {
        id: 3,
        name: "Долинная зона",
        content: "Долинная зона — отрицательная, линейно-вытянутая форма рельефа с однообразным падением. Образуется обычно в результате эрозионной деятельности текучей воды. Речная вода, смывая берега и подошву склонов, постепенно образует речную долину."
    }
]

export default Altitude
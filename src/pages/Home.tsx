import React from "react";

import {MainButton, Instruction} from "../components";
import jamStartSvg from "../assets/img/jamilya_start.svg"

const Home: React.FC = () => {
    return (
        <div className="lg:grid lg:grid-cols-12">
            <div className="col-span-6">
                <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                    Самооценка местных сообществ к изменению климата
                </h1>
                <div className="text-lg font-medium text-blue-800 mb-12">
                    <p className="mb-4">Вы узнаете какие климатические риски характерны именно для Вашего местного
                        сообщества.</p>
                    <p className="mb-4">Вы узнаете свои сильные и слабые стороны.</p>
                    <p className="mb-4">На основе полученных рекомендаций мы сможем составить план действий для
                        адаптации и смягчения последствий изменения климата.</p>
                    <p>И еще это интересный и увлекательный процесс!</p>
                </div>
                <MainButton path="/poll" name="Начать"/>
            </div>
            <div className="col-span-6">
                <div className="flex lg:ml-6">
                    <div className="flex-auto -mr-10">
                        <div className="bg-white rounded-xl px-6 py-8 mb-12 text-center">
                            <p className="mb-4 break-normal">
                                Здравствуйте, меня зовут Жамиля! Я помогу Вам узнать,
                                насколько Ваше местное сообщество уязвимо к изменению климата.</p>
                            <p>Жмите «Начать» и отвечайте на несложные вопросы.</p>
                        </div>
                        <div className="flex justify-center">
                            <Instruction/>
                        </div>
                    </div>
                    <div className="flex-none">
                        <img src={jamStartSvg} alt="Жамиля" className="w-[240px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import React from "react";
import {observer} from "mobx-react-lite";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsFillGeoAltFill} from "react-icons/bs";
import {FaCar, FaCity, FaHeartbeat, FaMountain, FaRecycle, FaTree, FaUsers} from "react-icons/fa";
import {MdAgriculture, MdSanitizer} from "react-icons/md";
import {RiAlarmWarningFill, RiLightbulbFlashFill} from "react-icons/ri";

import {useStores} from "../hooks/use-stores";
import {IStep} from "../store/StepStore";
import {Alert, AlertType, IAlert} from "./Alert";

const ICON_SIZE = 32

export const Navigation: React.FC = observer(() => {
    const {steps, active, setActiveStep} = useStores().stepStore
    const [alert, setAlert] = React.useState<IAlert | null>(null)
    const [openAlert, setOpenAlert] = React.useState<boolean>(false)

    return (
        <>
            <div className="flex mb-10">
                {
                    steps.map((step, index) =>
                        <div key={step.id} className={index === 0 ? `flex-none` : `grow flex`}>
                            {
                                index !== 0 && (
                                    <div className="grow inline-flex items-center">
                                        <hr className={
                                            `w-full text-white border-t-2 border-t border-dotted ` +
                                            `${(step.id === active.id || step.isComplete)
                                                ? `border-amber-300` : `text-gray-300`
                                            }`
                                        }/>
                                    </div>
                                )
                            }
                            <div
                                onClick={() => {
                                    if (step.isComplete) {
                                        if (active.isComplete) {
                                            setActiveStep(step.id)
                                        } else {
                                            setAlert({
                                                type: AlertType.ERROR,
                                                name: "Ошибка",
                                                desc: `Невозможно перейти к разделу "${step.name}". Сначала ответьте на все вопросы текущего раздела.`
                                            })
                                            setOpenAlert(true)
                                        }
                                    }
                                }}
                                className={
                                    `flex-none rounded-full p-2 text-center inline-flex items-center ` +
                                    getColor(step, active.id)
                                }
                            >
                                {getIcon(step)}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                (alert && openAlert) && (
                    <Alert
                        alert={{type: alert.type, name: alert.name, desc: alert.desc}}
                        setOpen={setOpenAlert}
                    />
                )
            }
        </>
    )
})

function getColor(step: IStep, activeId: number) {
    if (step.id === activeId)
        return "text-white bg-amber-300"

    if (step.isComplete)
        return "text-blue-800 hover:text-blue-600 bg-white cursor-pointer"

    return "text-gray-300 bg-gray-50"
}

function getIcon(step: IStep) {
    switch (step.id) {
        case 1:
            return <BsFillGeoAltFill size={ICON_SIZE} title={step.name}/>
        case 2:
            return <FaMountain size={ICON_SIZE} title={step.name}/>
        case 3:
            return <FaUsers size={ICON_SIZE} title={step.name}/>
        case 4:
            return <MdAgriculture size={ICON_SIZE} title={step.name}/>
        case 5:
            return <RiLightbulbFlashFill size={ICON_SIZE} title={step.name}/>
        case 6:
            return <FaHeartbeat size={ICON_SIZE} title={step.name}/>
        case 7:
            return <FaTree size={ICON_SIZE} title={step.name}/>
        case 8:
            return <FaCar size={ICON_SIZE} title={step.name}/>
        case 9:
            return <MdSanitizer size={ICON_SIZE} title={step.name}/>
        case 10:
            return <FaCity size={ICON_SIZE} title={step.name}/>
        case 11:
            return <RiAlarmWarningFill size={ICON_SIZE} title={step.name}/>
        case 12:
            return <FaRecycle size={ICON_SIZE} title={step.name}/>
        default:
            return <AiOutlineArrowRight size={ICON_SIZE} title={step.name}/>
    }
}
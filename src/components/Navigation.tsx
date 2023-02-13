import React from "react";
import {observer} from "mobx-react-lite";
import {useIntl} from "react-intl";
import {AiOutlineArrowRight, AiOutlineRadarChart} from "react-icons/ai";
import {BsFillGeoAltFill} from "react-icons/bs";
import {FaCar, FaCity, FaHeartbeat, FaRecycle, FaTree, FaUsers} from "react-icons/fa";
import {MdAgriculture, MdSanitizer} from "react-icons/md";
import {RiAlarmWarningFill, RiLightbulbFlashFill} from "react-icons/ri";

import {useStores} from "../hooks/use-stores";
import {IStep} from "../types/step";
import {AlertType, IAlert} from "../types/alert";
import {Alert} from "./Alert";

const ICON_SIZE = 32

export const Navigation: React.FC = observer(() => {
    const intl = useIntl()
    const [alert, setAlert] = React.useState<IAlert | null>(null)
    const [isAlertOpen, setAlertOpen] = React.useState<boolean>(false)
    const {stepStore} = useStores()

    return (
        <>
            <div className="flex mb-10">
                {
                    stepStore.steps.map((step, index) =>
                        <div key={step.id} className={index === 0 ? `flex-none` : `grow flex`}>
                            {
                                index !== 0 && (
                                    <div className="grow inline-flex items-center">
                                        <hr className={
                                            `w-full text-white border-t-2 border-t border-dotted ` +
                                            `${(step.id === stepStore.activeStep.id || stepStore.isCompleteStep(step.id))
                                                ? `border-amber-300` : `text-gray-300`
                                            }`
                                        }/>
                                    </div>
                                )
                            }
                            <div
                                onClick={() => {
                                    if (stepStore.isCompleteStep(step.id)) {
                                        if (stepStore.isCompleteStep(stepStore.activeStep.id)) {
                                            stepStore.setActive(step.id)
                                        } else {
                                            setAlert({
                                                type: AlertType.ERROR,
                                                name: intl.formatMessage({id: "label.error"}),
                                                desc: intl.formatMessage(
                                                    {id: "label.error.step.incomplete"},
                                                    {stepName: step.name})
                                            })
                                            setAlertOpen(true)
                                        }
                                    }
                                }}
                                className={
                                    `flex-none rounded-full p-2 text-center inline-flex items-center ` +
                                    getColor(step.id, stepStore.activeStep.id, stepStore.isCompleteStep(step.id))
                                }
                            >
                                {getIcon(step)}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                (alert && isAlertOpen) && (
                    <Alert
                        alert={{type: alert.type, name: alert.name, desc: alert.desc}}
                        setOpen={setAlertOpen}
                    />
                )
            }
        </>
    )
})

function getColor(stepId: number, activeId: number, isCompleteStep: boolean) {
    if (stepId === activeId)
        return "text-white bg-amber-300"

    if (isCompleteStep)
        return "text-blue-800 hover:text-blue-600 bg-white cursor-pointer"

    return "text-gray-300 bg-gray-50"
}

function getIcon(step: IStep) {
    switch (step.id) {
        case 1:
            return <BsFillGeoAltFill size={ICON_SIZE} title={step.name}/>
        case 2:
            return <FaUsers size={ICON_SIZE} title={step.name}/>
        case 3:
            return <MdAgriculture size={ICON_SIZE} title={step.name}/>
        case 4:
            return <RiLightbulbFlashFill size={ICON_SIZE} title={step.name}/>
        case 5:
            return <FaHeartbeat size={ICON_SIZE} title={step.name}/>
        case 6:
            return <FaTree size={ICON_SIZE} title={step.name}/>
        case 7:
            return <FaCar size={ICON_SIZE} title={step.name}/>
        case 8:
            return <MdSanitizer size={ICON_SIZE} title={step.name}/>
        case 9:
            return <FaCity size={ICON_SIZE} title={step.name}/>
        case 10:
            return <RiAlarmWarningFill size={ICON_SIZE} title={step.name}/>
        case 11:
            return <FaRecycle size={ICON_SIZE} title={step.name}/>
        case 12:
            return <AiOutlineRadarChart size={ICON_SIZE} title={step.name}/>
        default:
            return <AiOutlineArrowRight size={ICON_SIZE} title={step.name}/>
    }
}
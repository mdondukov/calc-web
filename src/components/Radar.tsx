import React from "react";
import {ResponsiveRadar} from "@nivo/radar"
import {observer} from "mobx-react-lite";

import {useStores} from "../hooks/use-stores";
import {fetchIndicators} from "../http/api";
import {Loader} from "./index";

export const Radar: React.FC = observer(() => {
    const {summaryStore, stepStore, regionStore, questionStore, uiStore} = useStores()

    React.useEffect(() => {
        summaryStore.setLoading(true)
        fetchIndicators(regionStore.selectRegion, questionStore.selectAnswers).then(response => {
            summaryStore.setIndicators(response.data.indicators)
            stepStore.setCompleteStep(stepStore.activeStep.id)
            summaryStore.setLoading(false)
        }).catch(error => {
            summaryStore.setError(error)
            summaryStore.setLoading(false)
        })
    },[])

    if (summaryStore.isLoading) {
        return <Loader/>
    }

    if (summaryStore.error) {
        throw Error(summaryStore.error)
    }

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">{stepStore.activeStep.name}</h1>
            <div className="radar" style={{height: getHeight(uiStore.windowDimensions.width)}}>
                <ResponsiveRadar
                    data={summaryStore.indicators.map(indicator => {
                        return {
                            name: indicator.name,
                            value: indicator.value
                        }
                    })}
                    keys={["value"]}
                    indexBy="name"
                    maxValue={3.0}
                    valueFormat=">-.1f"
                    margin={{top: 40, right: 80, bottom: 40, left: 80}}
                    borderColor={{from: 'color', modifiers: []}}
                    gridLevels={6}
                    gridLabelOffset={24}
                    dotSize={10}
                    dotColor={{theme: 'background'}}
                    dotBorderWidth={2}
                    enableDotLabel={true}
                    colors={{scheme: 'accent'}}
                    fillOpacity={0.15}
                    blendMode="multiply"
                    motionConfig="wobbly"
                    isInteractive={false}
                    theme={
                        {
                            "fontFamily": "'Montserrat', sans-serif",
                            "fontSize": 15,
                            axis: {
                                ticks: {
                                    text: {
                                        "fontWeight": 500,
                                        "fontSize": 13,
                                    }
                                }
                            }
                        }
                    }
                />
            </div>
        </>
    )
})

const getHeight = (windowWidth: number) => {
    if (windowWidth <= 640) return 300
    return 600
}
import React from "react";
import {ResponsiveRadar} from "@nivo/radar"
import {observer} from "mobx-react-lite";

import {useStores} from "../hooks/use-stores";
import {fetchIndicators} from "../http/api";
import {Loader} from "./index";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

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
    }, [])

    if (summaryStore.isLoading) {
        return <Loader/>
    }

    if (summaryStore.error) {
        throw Error(summaryStore.error)
    }

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                {stepStore.activeStep.name}
            </h1>
            <div className="radar mb-12" style={{height: getHeight(uiStore.windowDimensions.width)}}>
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

            <div className="bg-white rounded-xl p-10">
                <span className="text-sm text-blue-800 font-medium uppercase mb-2">
                    {regionStore.getRegion(regionStore.selectRegion.regionId).name}
                </span>

                <h3 className="text-2xl text-blue-800 font-bold uppercase mb-6">
                    {regionStore.getArea(regionStore.selectRegion.areaId).name}
                </h3>

                <p className="mb-6">{regionStore.getArea(regionStore.selectRegion.areaId).descr}</p>

                <div className="area-impact">
                    <ReactMarkdown
                        children={regionStore.getArea(regionStore.selectRegion.areaId).impact}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            </div>
        </>
    )
})

const getHeight = (windowWidth: number) => {
    if (windowWidth <= 640) return 300
    return 600
}
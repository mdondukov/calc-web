import React from "react";
import {ResponsiveRadar} from "@nivo/radar"
import {observer} from "mobx-react-lite";
import {useIntl} from "react-intl";

import {useStores} from "../hooks/use-stores";

const Radar: React.FC = observer(() => {
    const intl = useIntl()
    const {indicators} = useStores().indicatorStore
    const {windowDimensions} = useStores().uiStore

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                {intl.formatMessage({id: "page.radar.name"})}
            </h1>
            <div className="radar" style={{height: getHeight(windowDimensions.width)}}>
                <ResponsiveRadar
                    data={indicators}
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

export default Radar
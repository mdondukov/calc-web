import React from "react";
import {ResponsiveRadar} from "@nivo/radar"

type IndicatorType = {
    name: string,
    value: number
}

const getHeight = (width: number) => {
    let height = 600
    if (width <= 640) height = 300
    return height
}

const Radar: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width])

    return (
        <>
            <h1 className="text-4xl text-lime-500 font-bold uppercase mb-12">
                Радар уязвимости
            </h1>
            <div className="radar" style={{height: getHeight(width)}}>
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
}

export default Radar

const indicators: IndicatorType[] = [
    {
        name: "1. Самоорганизация и потенциал местного сообщества",
        value: 2.5
    },
    {
        name: "2. Сельское хозяйство",
        value: 1.5
    },
    {
        name: "3. Энергетика и энергоэффективность",
        value: 0.5
    },
    {
        name: "4. Здоровье населения",
        value: 1.7
    },
    {
        name: "5. Естественная среда",
        value: 2.0
    },
    {
        name: "6. Инфраструктура, туризм, транспорт",
        value: 2.5
    },
    {
        name: "7. Вода, санитария, гигиена",
        value: 2.3
    },
    {
        name: "8. Среда населенных пунктов",
        value: 1.0
    },
    {
        name: "9. Чрезвычайные ситуации",
        value: 1.5
    },
    {
        name: "10. Отходы",
        value: 0.5
    }
]
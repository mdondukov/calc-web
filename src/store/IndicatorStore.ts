export type IIndicator = {
    name: string
    value: number
}

export class IndicatorStore {
    public indicators: IIndicator[] = [
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
}
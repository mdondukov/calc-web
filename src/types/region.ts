export interface IRegion {
    id: number
    name: string
    descr: string
    areas: IArea[]
}

export interface IArea {
    id: number
    name: string
    descr: string
    ord: number
}

export interface IRegionSelect {
    regionId: number
    areaId: number
}
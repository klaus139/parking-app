export type LatLng = {
    lat:number,
    lng:number
}

export type ListPostPropsType = {
    onNext:() => void;
    onPrev?: () => void;
}
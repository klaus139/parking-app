import { LatLng } from "@/types"
import{create} from "zustand"

export type SpotType = {
    address?: string,
    gspcooords?:LatLng,
    numberOfSpots?:number,
    price?:{
        hourly:number
    }
}

export interface SpotState {
    data:SpotType,
    updateState:(date:SpotType)=>void,
    restart:()=>void
}

export const useMySpotStore = create<SpotState>()((set) =>({
    data:{
        address:'',
        gspcooords:{
            lat:0,
            lng:0
        },
        numberOfSpots:1,
        price:{
            hourly:0
        }
    },
    updateState:(data) =>set((state) => ({
        data:{...state.data, ...data}
    })),
    restart: () =>set({
        data:{
            address:'',
            gspcooords:{
                lat:0,
                lng:0
            },
            numberOfSpots:1,
            price:{
                hourly:0
            }
        }
    })
}))
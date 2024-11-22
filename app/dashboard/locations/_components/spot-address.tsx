"use client"
import AddressAutocompleteInput from '@/components/address-autocompleteinput';
import { Button } from '@/components/ui/button';
import { useMySpotStore } from '@/store'
import { LatLng, ListPostPropsType } from '@/types';
import React,{useState} from 'react'


function SpotAddress({onNext}:ListPostPropsType) {

    const mySpotStore = useMySpotStore();
    const [message, setMessage] = useState("");

    
    function onSubmit(){
        if(mySpotStore.data.address){
            onNext()
        }else {
            setMessage("Address is required")
        }
    }

    const handleAddressSelect = (address: string, gpscoords:LatLng) =>{
        mySpotStore.updateState({
            address: address,
            gspcooords: gpscoords,
            // price: {
            //     hourly: 0
            // }
        })

    }
  return (
    <div className="grid w-full gap-1 5">
        <h2 className="text-xl sm:text-2xl py-4 font-semibold">
            Address
        </h2>
        <AddressAutocompleteInput onAddressSelect={handleAddressSelect} selectedAddress={mySpotStore.data.address}/>
        <p className='text-red-500 text-sm'>{message}</p>
        <div className="flex justify-between py-4">
        <Button type='button' variant='ghost' onClick={onSubmit} className='py-4 my-2'>Next</Button>
        </div>
       
    </div>
    
  )
}

export default SpotAddress
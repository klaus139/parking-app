"use client"
import { LatLng } from '@/types'
import React,{useRef, useState, useEffect} from 'react'
import {useJsApiLoader} from "@react-google-maps/api"
import { libs } from '@/lib/utils'
import { getLocationOrigin } from 'next/dist/shared/lib/utils'
import { Input } from './ui/input'

type AddressAutoCompleteInputProps ={
    onAddressSelect:(address:string, gpscoord:LatLng) => void
    selectedAddress?:string
}

const AddressAutocompleteInput = ({
    onAddressSelect, selectedAddress
}:AddressAutoCompleteInputProps) => {

    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null)

    const {isLoaded} = useJsApiLoader({
        nonce:"477d4456-f7b5-45e2-89e2-sf17b3964752",
        googleMapsApiKey:process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        libraries:libs
    })

    const placesAutoCompleteRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(isLoaded){
            const beninBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng({ lat: 6.3382, lng: 5.6258}),
            )
            const gAutoComplete = new google.maps.places.Autocomplete(placesAutoCompleteRef.current as HTMLInputElement,{
                bounds: beninBounds,
                fields: ['formatted_address', 'geometry'],
                componentRestrictions:{
                    country:["ng"]
                }
            })

            gAutoComplete.addListener('place_changed', () => {
                const place = gAutoComplete.getPlace()
                const position = place.geometry?.location
                onAddressSelect(place.formatted_address!, {
                    lat:position?.lat()!,
                    lng: position?.lng()!
                })
            })
        }

    },[isLoaded])

    useEffect(() => {
        setTimeout(() => (document.body.style.pointerEvents = ""), 0)
    })

  return (
    <Input ref={placesAutoCompleteRef} defaultValue={selectedAddress}/>
  )
}

export default AddressAutocompleteInput
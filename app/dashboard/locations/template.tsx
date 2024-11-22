import React from 'react'
import AddLocationButton from './_components/add-location-button'

const LocationsTemplate = ({
  children
}:{children: React.ReactNode}) => {
  return (
    <div>
      <AddLocationButton />
      {children}
    </div>
  )
}

export default LocationsTemplate
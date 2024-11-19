import Banner from '@/components/banner'
import React from 'react'

const GuestLayout = ({
    children }:{children:React.ReactNode}) => {
  return (
    <>

  <Banner />
    {children}

    </>
  )
}

export default GuestLayout
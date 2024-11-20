import React from 'react'
import SidebarLayout from './_components/sidebar-layout'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <SidebarLayout>{children}</SidebarLayout>
  )
}

export default DashboardLayout
"use client"
import { Menu } from 'lucide-react';
import React,{useState} from 'react';
import MobileSidebar from './mobile-sidebar';
import DesktopSidebar from './desktop-sidebar';



function SidebarLayout({children}:{children:React.ReactNode}) {
    const [open, setOpen] = useState(false);
    //const apiKey="AIzaSyDir8wOA5J2CC8LeohSf4l2PSIFeIcXmzo"
  return (
    <div className='flex flex-col h-screen'>
        <div className="flex w-full bg-blue-500 h-12 lg:hidden p-2 text-white items-center">
            <Menu onClick={() => setOpen(open => !open)} />
            <h1 className='text-2xl pl-4'>Dashboard</h1>
        </div>

        <div className="flex h-screen">
            <MobileSidebar setOpen={setOpen} open={open} />
            <DesktopSidebar />
            <main className='flex-1 bg-gray-200 p-4'>
                {children}

            </main>
        </div>

    </div>
  )
}

export default SidebarLayout
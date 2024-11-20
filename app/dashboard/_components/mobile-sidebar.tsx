import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
 
} from "@/components/ui/sheet"
import Sidebar from '@/components/sidebar'


function MobileSidebar({open, setOpen}:{open:boolean, 
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='left' className='p-0 w-[256px]'>
        <SheetTitle className='bg-gray-800 hidden text-2xl'>.</SheetTitle>
            <Sidebar />
        </SheetContent>

    </Sheet>
  )
}

export default MobileSidebar
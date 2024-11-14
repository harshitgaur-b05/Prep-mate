import React from 'react'
import Image from 'next/image';
import { icons, Search } from 'lucide-react';
function SideBarNav() {
    const menulist = [
        {
            id: 1,
            name: 'Browse',
            icon: Search,
            path: '/Browse',
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: Search,
            path: '/dashboard',
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Search,
            path: '/upgrade',
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: Search,
            path: '/Newsletter',
        },
    ];
    
  return (
    <div className='h-full bg-white border-r flex-col overflow-y-auto shadow-md'>
    <div className='p-5 border-b'>
       <Image src="/logo.webp" alt="Logo" width={100} height={100} />
    </div>
    </div>
  )
}

export default SideBarNav
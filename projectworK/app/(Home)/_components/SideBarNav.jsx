import React from 'react'
import Image from 'next/image';
import { icons, Layout, Mail, Search, Shield } from 'lucide-react';
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
            icon: Layout,
            path: '/dashboard',
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade',
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: Mail,
            path: '/Newsletter',
        },
    ];
    
  return (
    <div className='h-full bg-white border-r flex-col overflow-y-auto shadow-md'>
    <div className='p-5 border-b'>
       <Image src="/logo.webp" alt="Logo" width={100} height={100} />
    </div>
    <div className='flex flex-col'>
        {menulist.map((item,index)=>{
            <button>
                <h2>{item.name}</h2>
            </button>
        })}
    </div>
    </div>
  )
}

export default SideBarNav
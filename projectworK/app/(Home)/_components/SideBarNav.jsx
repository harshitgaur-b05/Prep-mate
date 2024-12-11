"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Mail, Search, Shield } from "lucide-react";

function SideBarNav() {
    const menulist = [
        {
            id: 1,
            name: "Browse",
            icon: Search,
            path: "/Browse",
        },
        {
            id: 2,
            name: "Dashboard",
            icon: Layout,
            path: "/dashboard",
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield,
            path: "/upgrade",
        },
        {
            id: 4,
            name: "Newsletter",
            icon: Mail,
            path: "/Newsletter",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
            <div className="p-5 border-b">
                <Image 
                    src="/logo.webp" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                />
            </div>

            <div className="flex flex-col">
                {menulist.map((item, index) => (
                    <Link 
                        key={item.id} 
                        href={item.path} 
                        className="group"
                    >
                        <div
                            className={`
                                flex gap-2 items-center p-4 px-6 
                                text-gray-500 hover:bg-gray-100 
                                cursor-pointer 
                                ${activeIndex === index ? "bg-purple-50 text-purple-500" : ""}
                            `}
                            onClick={() => setActiveIndex(index)}
                            role="button"
                            aria-selected={activeIndex === index}
                        >
                            <item.icon className="mr-2" />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideBarNav;

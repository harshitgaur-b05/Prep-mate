"use client"
import React, { useState } from "react";

function CategoryFilter() {
    const filterOptions = [
        { id: 1, name: "All", value: "all" },
        { id: 2, name: "React JS", value: "react" },
        { id: 3, name: "Tailwind", value: "tailwind" },
        { id: 4, name: "Next JS", value: "next" },
        { id: 5, name: "Firebase", value: "firebase" },
    ];

    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="flex gap-5">
            {filterOptions.map((item) => (
                <button
                    key={item.id}
                    className={`border p-2 px-4 text-[12px] rounded-md font-semibold ${
                        activeFilter === item.value
                            ? "bg-purple-100 text-purple-800 border-purple-800"
                            : "hover:border-purple-800"
                    }`}
                    onClick={() => setActiveFilter(item.value)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;

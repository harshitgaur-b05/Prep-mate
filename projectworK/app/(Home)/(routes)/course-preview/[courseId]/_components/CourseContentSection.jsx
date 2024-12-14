import { Unlock, Play } from "lucide-react";
import React, { useState } from "react";

function CourseContentSection({ courseInfo, setActiveIndex }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2>Contents</h2>
      {courseInfo?.chapter.map((item, id) => (
        <div key={id}>
          <h2
            className={`p-2 text-[14px] flex justify-between items-center m-2
            border rounded-sm px-4 cursor-pointer ${
              hoveredIndex === id ? "bg-purple-600 text-white" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(id)} // Call parent function on click
          >
            {id + 1}. {item.name}
            {hoveredIndex === id ? (
              <Play className="h-4 w-4" />
            ) : (
              <Unlock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CourseContentSection;

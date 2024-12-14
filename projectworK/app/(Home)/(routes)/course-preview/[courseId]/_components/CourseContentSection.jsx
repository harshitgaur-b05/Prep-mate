import { Unlock, Play } from 'lucide-react';
import React, { useState } from 'react';

function CourseContentSection({ courseInfo }) {
  return (
    <div className="p-3 bg-white rounded-sm">
      <h2>Contents</h2>
      {courseInfo?.chapter.map((item, id) => (
        <HoverableField key={id} id={id} name={item.name} />
      ))}
    </div>
  );
}

function HoverableField({ id, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h2
      className="p-2 text-[14px] flex justify-between items-center
      m-2 hover:bg-purple-600 hover:text-white 
      border rounded-sm px-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {id + 1}. {name}
      {isHovered ? <Play className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
    </h2>
  );
}

export default CourseContentSection;

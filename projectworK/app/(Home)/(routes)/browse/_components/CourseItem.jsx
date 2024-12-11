import Image from 'next/image';
import React from 'react';

function CourseItem({ course }) {
  return (
    <div className="group bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          src={course?.banner?.url}
          width={500}
          height={150}
          alt="Course Banner"
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        {course?.free && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold transform transition-transform group-hover:scale-110">
            FREE
          </div>
        )}
      </div>
      
      <div className="p-4 transition-colors duration-300 group-hover:bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate transition-colors duration-300 group-hover:text-blue-600">
          {course.name}
        </h2>
        
        <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <Image 
            src='/video.png' 
            alt='Video icon' 
            width={20}
            height={20}
            className="transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
            {course?.free ? 'Free Course' : 'Paid Course'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;





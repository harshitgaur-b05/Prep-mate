import React from 'react';
import Image from 'next/image'; // Ensure this import is present

function CourseList({ courses = [] }) { // Default to an empty array if courses is undefined
  return (
    <div className="mt-5">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="mb-5">
            <h2 className="text-lg font-bold">{course.name}</h2>
            {course.banner?.url && (
              <Image
                src={course.banner.url}
                alt={course.name}
                width={360}
                height={500}
                className="rounded-md"
              />
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No courses available.</p>
      )}
    </div>
  );
}

export default CourseList;

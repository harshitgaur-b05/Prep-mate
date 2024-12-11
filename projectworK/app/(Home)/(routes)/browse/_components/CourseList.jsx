import React, { useEffect, useState } from 'react';
import { getCourseList } from '@/app/_services'; // Adjust the path based on your project structure
import CourseItem from './CourseItem';

function CourseList() {
  const [courseList, setCourseList] = useState([]);

  // Fetch Course List
  const getAllCourses = async () => {
    try {
      const resp = await getCourseList();
      console.log(resp); // Debugging response
      setCourseList(resp?.courseLists || []); // Fallback to an empty array
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="p-5 bg-gray-900 text-gray-300 rounded-lg mt-5">
      {/* Title and Filter */}
      <div className="text-[20px] font-bold text-gray-300">All Courses</div>
      {/* Separator */}
      <div>----------------------------------------------------------</div>
      {/* Display Course List */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap">
        {courseList.map((item, index) => (
          <CourseItem key={index} course={item} /> 
        ))}
      </div>
    </div>
  );
}

export default CourseList;


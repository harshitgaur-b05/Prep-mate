"use client"
import React, { useEffect, useState } from 'react';
import { getCourseList } from '@/app/_services'; // Adjust the path based on your project structure
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch Course List
  const getAllCourses = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error
    try {
      const resp = await getCourseList();
      console.log(resp); // Debugging response
      setCourseList(resp || []); // Fallback to an empty array
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="p-5 bg-gray-900 text-gray-300 rounded-lg mt-5">
      {/* Title */}
      <div className="text-[20px] font-bold text-gray-300 mb-4">All Courses</div>
      {/* Error Handling */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseList.length > 0 ? (
            courseList.map((item) => (
            
<Link href={`/course-preview/${item.slug}`} key={item.id}>
  <CourseItem course={item} />
</Link>


            ))
          ) : (
            <div className="text-gray-500 col-span-full text-center">
              No courses available.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseList;

"use client";

import React, { useEffect, useState } from 'react';
import CategoryFilter from './_components/CategoryFilter';
import { getCourseList } from '@/app/_services';
import CourseList from './_components/CourseList';

function Browse() {
  const [courses, setCourses] = useState([]);

  // Define getCourses before useEffect
  const getCourses = async () => {
    try {
      const res = await getCourseList();
      console.log(res.courseLists?.[0]?.name); // Safe access using optional chaining
      setCourses(res.courseLists || []); // Fallback to an empty array if courseLists is undefined
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <CategoryFilter />
      <CourseList courses={courses} /> {/* Renamed prop to 'courses' for consistency */}
    </div>
  );
}

export default Browse;

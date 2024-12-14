"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import { getCourseById } from '@/app/_services'

function CoursePreview({ params }) {
    useEffect(() => {
      if (params?.slug) {
        getCourseInfoById(params.slug);
      }
    }, [params]);
  
    const getCourseInfoById = (slug) => {
      getCourseById(slug).then((resp) => {
        console.log(resp);
      });
    };
  
    return (
      <div className="grid grid-col-1 md:grid-cols-3 p-5 gap-3">
        {/* Title, video description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription />
        </div>
        {/* Course content */}
        <div></div>
      </div>
    );
  }
  

export default CoursePreview
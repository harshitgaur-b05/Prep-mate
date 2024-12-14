import React from 'react'
import Button from '@/app/(Home)/_components/Button'
function CourseEnrollSection() {
  return (
    <div className='p-3 text-center rounded-sm bg-purple-600 flex flex-col gap-3'>
       <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
        <h2>Enroll now to Start Learning and Building the project</h2>
        <Button text={"Enroll Now"}></Button>
        
        </div>
  )
}

export default CourseEnrollSection
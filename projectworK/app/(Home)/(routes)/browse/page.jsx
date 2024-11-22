"use client"
import React, { useEffect } from 'react'
import CategoryFilter from '../../_components/CategoryFilter'
import { getCourseList } from '@/app/_services'



  function Browse() {
    useEffect(()=>{
        getCouses()
    },[])

    const getCouses=()=>{
      getCourseList().then(res=>{
        console.log(res)
      })
      }
  return (
    <div>
      <CategoryFilter/>
    </div>
  )
}

export default Browse
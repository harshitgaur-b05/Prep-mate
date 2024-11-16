import React from 'react'
import SideBarNav from '../_components/SideBarNav'
import Header from '../_components/Header'

function Homelayout({children}) {
  return (
    <div>
    <div className='h-full w-64  flex-col fixed *:inset-y-0 z-50 '>
      <SideBarNav/>
      
      </div>
      {/* {children} */}
      <Header/>
      </div>
  )
}

export default Homelayout
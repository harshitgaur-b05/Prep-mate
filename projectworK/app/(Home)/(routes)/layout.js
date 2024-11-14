import React from 'react'
import SideBarNav from '../_components/SideBarNav'

function Homelayout({children}) {
  return (
    <div className='h-full w-64 flex-col fixed *:inset-y-0 z-50'>
      <SideBarNav/>
      {children}</div>
  )
}

export default Homelayout
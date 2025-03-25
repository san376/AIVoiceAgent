import React from 'react'
import AppHeader from './_components/AppHeader'

function DashboardLayout({children}) {
  return (
    <div>
        <AppHeader/>
      <p className='p-10 mt-20 md:px-20 lg:px-32 xl:px-56 2xl:px-72'>
      {children}
      </p>
    </div>
  )
}

export default DashboardLayout
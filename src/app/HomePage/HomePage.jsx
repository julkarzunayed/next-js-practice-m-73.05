import React from 'react'
import Location from './Location'


export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen '>
      {/* <div className=""> */}
        <h1 className='text-5xl font-bold text-center'>
          This is the mane Home page.
        </h1>
        <Location />
      {/* </div> */}
    </div>
  )
}

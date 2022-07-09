import React from 'react'
import Head from './resume/right/Head'

const Main = () => {
  return (
    <div className=" a4size flex flex-row ">
      <div className=" max-w-1/3 w-1/2 bg-gray-200">
        <Head />
      </div>
      <div className="w-full bg-gray-100">
        <p className='max-w-sm sm:text-sm'>ama zanm che lede lera ok hastakam basha be</p>
      </div>
    </div>
  )
}

export default Main

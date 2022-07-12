import React, { useEffect, useContext } from 'react'
import Expereans from './resume/left/Expereans'
import Head from './resume/right/Head'
import { UserContext } from '../../context/context'
const Main = () => {
  const { printed, setprinted }: any = useContext(UserContext)

  //print function to print the resume to pdf
  const printResume = async () => {
  
    print()
  
  }
 
  console.log("before --> "+printed)
useEffect(() => {
  if (printed) {
    printResume()
    setprinted(false)
  }
}
, [printed])
console.log("after --> "+printed)
  return (
    <>
      <div className="main-page">
        <div className="sub-page">
          <div className="grid grid-cols-3 ">
            <div className="sub-page w-full bg-rasas">
              <Head />
            </div>
            <div className="col-span-2 ">
              <Expereans />
            </div>
          </div>
        </div>
      </div>
      {/* <button className={`${printed && 'hidden'}`} onClick={()=>{setprinted(true)}}> print</button> */}
    </>
  )
}

export default Main

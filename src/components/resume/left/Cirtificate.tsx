import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addcirtification from './Addcirtificate'

const Cirtificate = () => {
  const [cirtification, setcirtification] = useState<any>([])

  //add aour data to our array
  const add = (cirtificate: string, cirtificatetitle: string) => {
    setcirtification([
      ...cirtification,
      {
        id: uuidv4(),
        cirtificate: cirtificate,
        cirtificateyear: cirtificatetitle,
      },
    ])
  }
  //state using for deleting
  const [deleted, setdeleted] = useState<boolean>(false)

  //delete our data from our array
  const deletecirtificate = (id: any) => {
    setcirtification(
      cirtification.filter((cirtificate) => cirtificate.id !== id),
    )
  }

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }
  //add aour data to local storage and get it from local storage and set it to our array and show it in our component with useEffect hook
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('cirtification'))
    if (getdata) {
      setcirtification(getdata)
    }
  }, [deleted])
  useEffect(() => {
    localStorage.setItem('cirtification', JSON.stringify(cirtification))
  }, [cirtification])

  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="md:mt-6 mr-2 mt-3  items-center flex ">
        {/* <AiFillDelete className="text-red-500" onClick={deletedall} /> */}
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700">
          بڕوانامە
        </h3>
      </div>
      {/* <Addcirtification cirtification={add} /> */}
      {cirtification.map((e) => {
        return (
          <div className="flex  space-x-4 sm:mt-2">
            {/* <AiFillDelete
              className="text-red-500"
              onClick={() => deletecirtificate(e.id)}
            /> */}
            {/* <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2 sm:mr-2 bg-gray-500 sm:ml-2 ml-1"></div> */}
            <div className="flex flex-col ">
              <div
                className="flex md:text-xl mr-0 mt-1 xxs text-gray-600 mx-auto font-bold sm:mt-3 md:w-full"
                key={e.id}
              >
                {e.cirtificate}
              </div>
              <div
                className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full"
                key={e.id}
              >
                {e.cirtificateyear}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Cirtificate

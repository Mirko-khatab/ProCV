import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addedu from './Addedu'

const Education = () => {
  // const change = (event) =>{
  //   const newvalue = event.target.value
  // setedu(newvalue)
  // }

  const [addedu, setaddedu] = useState<any>([])

  //add aour data to our array
  const add = (edu: string) => {
    setaddedu([...addedu, { id: uuidv4(), edu }])
  }
  const [deleted, setdeleted] = useState<boolean>(false)

  //delete our data from our array
  const deleteedu = (id: any) => {
    setaddedu(addedu.filter((edu) => edu.id !== id))
  }

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }
  //add aour data to local storage and get it from local storage and set it to our array and show it in our component with useEffect hook
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('edu'))
    if (getdata) {
      setaddedu(getdata)
    }
  }, [deleted])
  useEffect(() => {
    localStorage.setItem('edu', JSON.stringify(addedu))
  }, [addedu])

  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="sm:mt-6 mt-3 sm:mr-2  items-center flex ">
        {/* <AiFillDelete className="text-red-500" onClick={deletedall} /> */}
        <h3 className="sm:text-3xl text-xs font-bold text-gray-700">
          بڕوانامەی زانستی
        </h3>
      </div>
      {/* <Addedu edutitle={add} /> */}
      {addedu.map((e) => {
        return (
          <div className="flex items-center  space-x-4 md:mt-4 mt-2">
            {/* <AiFillDelete
              className="text-red-500"
              onClick={() => deleteedu(e.id)}
            /> */}
            <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2 sm:mr-2 bg-gray-500 sm:ml-2 ml-1"></div>
            <div
              className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold  md:w-full"
              key={e.id}
            >
              {e.edu}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education

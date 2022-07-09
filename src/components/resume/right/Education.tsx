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
      <div className="mt-20 mr-4 items-center flex ">
        <AiFillDelete className="text-red-500" onClick={deletedall} />
        <h3 className="text-2xl font-bold text-gray-700 ">بڕوانامەی زانستی</h3>
      </div>
      <Addedu edutitle={add} />
      {addedu.map((e) => {
        return (
          <div className="flex items-center space-x-4 mt-6">
            <AiFillDelete
              className="text-red-500"
              onClick={() => deleteedu(e.id)}
            />
            <div className="rounded-full w-4 h-4 mr-2 bg-gray-500"></div>
            <div key={e.id}>{e.edu}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Education

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addexpereans from './Addexpereans'

const Expereans = () => {
  const [addexperians, setaddexperians] = useState<any>([])

  //add aour data to our array
  const add = (edu: string, eduyear: string) => {
    setaddexperians([
      ...addexperians,
      { id: uuidv4(), edu: edu, eduyear: eduyear },
    ])
  }
  const [deleted, setdeleted] = useState<boolean>(false)

  //delete our data from our array
  const deleteedu = (id: any) => {
    setaddexperians(addexperians.filter((edu) => edu.id !== id))
  }

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }
  //add aour data to local storage and get it from local storage and set it to our array and show it in our component with useEffect hook
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('addexperians'))
    if (getdata) {
      setaddexperians(getdata)
    }
  }, [deleted])
  useEffect(() => {
    localStorage.setItem('addexperians', JSON.stringify(addexperians))
  }, [addexperians])

  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="mt-6 mr-2 items-center flex ">
        <AiFillDelete className="text-red-500" onClick={deletedall} />
        <h3 className="sm:text-3xl text-xl  font-bold text-gray-700 ">
          ئەزموون
        </h3>
      </div>
      <Addexpereans exptitle={add} />
      {addexperians.map((e) => {
        return (
          <div className="flex items-center space-x-4 mt-4">
            <AiFillDelete
              className="text-red-500"
              onClick={() => deleteedu(e.id)}
            />
            <div className="rounded-full w-4 h-4 mr-2 bg-gray-500"></div>

            <div className="sm:text-xl text-sm" key={e.id}>
              {e.edu}
            </div>
            <div className="sm:text-xl text-sm" key={e.id}>
              {e.eduyear}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Expereans

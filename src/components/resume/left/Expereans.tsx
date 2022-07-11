import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addexpereans from './Addexpereans'
import Cirtificate from './Cirtificate'

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
    <div>
      <div className={`${deleted && 'hidden'}`}>
        <div className="md:mt-6 mr-2 mt-3  items-center flex ">
          {/* <AiFillDelete className="text-red-500" onClick={deletedall} /> */}
          <h3 className="sm:text-3xl text-sm font-bold text-gray-700">
            ئەزموون
          </h3>
        </div>
        {/* <Addexpereans exptitle={add} /> */}
        {addexperians.map((e) => {
          return (
            <div className="flex items-center space-x-4 sm:mt-2">
              {/* <AiFillDelete
              className="text-red-500"
              onClick={() => deleteedu(e.id)}
            /> */}
              <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2 sm:mr-2 bg-gray-500 sm:ml-2 ml-1"></div>
              <div className="flex flex-col items-center">
                <div
                  className="flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full"
                  key={e.id}
                >
                  {e.edu}
                </div>
                <div
                  className="flex md:text-xl  xxs text-gray-600 mx-auto font-bold sm:mt-3 md:w-full"
                  key={e.id}
                >
                  {e.eduyear}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Cirtificate/>
    </div>
  )
}
export default Expereans

import React, { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addcirtification from './Addcirtificate'
import { UserContext } from '../../../context/context'
import { LangContext } from '../../../context/lang'

const Cirtificate = () => {

  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Cirtificate

  //usecontext
  const { printed,setprinted }: any = useContext(UserContext)

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
    setprinted(false)
  }, [cirtification])

  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="md:mt-6  mt-3  items-center flex ">
        <AiFillDelete
          className={`text-red-500 xxs ${printed && 'hidden'}`}
          onClick={deletedall}
        />
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700">
          {Text.Cirtificate}
        </h3>
      </div>
      <div className={`${printed && 'hidden'}`}>
        {' '}
        <Addcirtification cirtification={add} />{' '}
      </div>
      {cirtification.map((e) => {
        return (
          <div className="flex  items-start justify-start sm:mt-2">
            <AiFillDelete
              className={`text-red-500 xxs ${printed && 'hidden'}`}
              onClick={() => deletecirtificate(e.id)}
            />
            {/* <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2 sm:mr-2 bg-gray-500 sm:ml-2 ml-1"></div> */}
            <div className="flex justify-start items-start flex-col ">
              <div
                className="flex md:text-xl  mt-1 xxs text-gray-600 mr-2 ml-2 font-bold sm:mt-3 md:w-full"
                key={e.id}
              >
                {e.cirtificate}
              </div>
              <div
                className="flex md:text-xl  mr-1 ml-1 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full"
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

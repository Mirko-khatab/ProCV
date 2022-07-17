import React, { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addedu from './Addedu'
import { UserContext } from '../../../../context/context'
import { LangContext } from '../../../../context/lang'

const Education = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Education
  // const change = (event) =>{
  //   const newvalue = event.target.value
  // setedu(newvalue)
  // }

  // useContext
  const { printed }: any = useContext(UserContext)

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
    <div className={`${deleted && 'hidden'} `}>
      <div className="sm:mt-6 mt-3 sm:mr-2  items-center flex ml-2 sm:ml-1">
        <AiFillDelete
          className={`text-red-500 xxs ${printed && 'hidden'}`}
          onClick={deletedall}
        />
        <h3 className="sm:text-3xl text-xs font-bold text-gray-700">
          {Text.Education}
        </h3>
      </div>
      <div className={`${printed && 'hidden'}`}>
        {' '}
        <Addedu edutitle={add} />
      </div>
      {addedu.map((e) => {
        return (
          <div className="flex items-center  space-x-1 md:mt-4 mt-2">
            <AiFillDelete
              className={`text-red-500 xxs ${printed && 'hidden'}`}
              onClick={() => deleteedu(e.id)}
            />
            <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2  bg-gray-500 sm:ml-2 "></div>
            <div
              className="bg-rasas flex md:text-xl  xxs text-gray-600  font-bold  md:w-full"
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

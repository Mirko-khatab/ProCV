import React, { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addexpereans from './Addexpereans'
import Cirtificate from './Cirtificate'
import Refrence from './Refrence'
import Addlanguage from './Addlanguage'
import { UserContext } from '../../../../context/context'
import { LangContext } from '../../../../context/lang'

const Language = () => {
  const [addlanguage, setaddlanguage] = useState<any>([])

  const { printed }: any = useContext(UserContext)

  //add aour data to our array
  const add = (lang: string) => {
    setaddlanguage([...addlanguage, { id: uuidv4(), lang }])
  }
  const [deleted, setdeleted] = useState<boolean>(false)

  //delete our data from our array
  const deleteedu = (id: any) => {
    setaddlanguage(addlanguage.filter((lang) => lang.id !== id))
  }

  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Language

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }
  //add aour data to local storage and get it from local storage and set it to our array and show it in our component with useEffect hook
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('addlanguage'))
    if (getdata) {
      setaddlanguage(getdata)
    }
  }, [deleted])
  useEffect(() => {
    localStorage.setItem('addlanguage', JSON.stringify(addlanguage))
  }, [addlanguage])

  return (
    <div>
      <div className={`${deleted && 'hidden'}`}>
        <div className="md:mt-6 mr-2 mt-3  items-center flex ">
          <AiFillDelete
            className={`text-red-500 xxs ${printed && 'hidden'}`}
            onClick={deletedall}
          />
          <h3 className="sm:text-3xl text-sm font-bold text-gray-700">
            {Text.Language}
          </h3>
        </div>
        <div className={`text-red-500 xxs ${printed && 'hidden'}`}>
          {' '}
          <Addlanguage languagetitle={add} />
        </div>
        <div className="flex flex-row">
          {addlanguage.map((e) => {
            return (
              <div className="flex items-center  space-x-4 sm:mt-4 mt-2">
                <AiFillDelete
                  className={`text-red-500 xxs ${printed && 'hidden'}`}
                  onClick={() => deleteedu(e.id)}
                />
                <div className="rounded-full sm:w-4 sm:h-4 w-2 h-2 sm:mr-2 bg-gray-500 sm:ml-2 ml-1"></div>
                <div className="flex flex-row items-center">
                  <div
                    className="flex flex-row md:text-xl  xxs text-gray-600 mx-auto font-bold  md:w-full"
                    key={e.id}
                  >
                    {e.lang}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Language

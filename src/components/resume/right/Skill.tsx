import React, { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import Addskill from './Addskill'
import { UserContext } from '../../../../context/context'
import { LangContext } from '../../../../context/lang'
const Skill = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Skills

  const { printed }: any = useContext(UserContext)
  console.log('ama printed a kaea la skill --->' + printed)

  const [addskill, setaddskill] = useState<any>([])

  //add aour data to our array
  const add = (edu: string) => {
    setaddskill([...addskill, { id: uuidv4(), edu }])
  }
  const [deleted, setdeleted] = useState<boolean>(false)

  //delete our data from our array
  const deleteedu = (id: any) => {
    setaddskill(addskill.filter((edu) => edu.id !== id))
  }

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }
  //add aour data to local storage and get it from local storage and set it to our array and show it in our component with useEffect hook
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem('skill'))
    if (getdata) {
      setaddskill(getdata)
    }
  }, [deleted])
  useEffect(() => {
    localStorage.setItem('skill', JSON.stringify(addskill))
  }, [addskill])

  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="sm:mt-6 mt-3 sm:mr-2 sm:ml-2  items-center flex ml-1 ">
        <AiFillDelete
          className={`text-red-500 xxs ${printed && 'hidden'}`}
          onClick={deletedall}
        />
        <h3 className="sm:text-3xl text-xs font-bold text-gray-700">
          {Text.Skills}
        </h3>
      </div>
      <div className={`${printed && 'hidden'}`}>
        <Addskill edutitle={add} />
      </div>
      {addskill.map((e) => {
        return (
          <div className="flex items-center  space-x-1 md:mt-4 mt-2">
            <AiFillDelete
              className={`text-red-500 xxs ${printed && 'hidden'}`}
              onClick={() => deleteedu(e.id)}
            />
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

export default Skill

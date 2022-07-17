import React, { useState, useEffect, useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { UserContext } from '../../../../context/context'
import { LangContext } from '../../../../context/lang'

const Refrence = () => {
  const [work, setwork] = useState<any>('')
  const [name, setname] = useState<any>('')
  const [email, setemail] = useState<any>('')
  const [phone, setphone] = useState<any>('')
  const [deleted, setdeleted] = useState<boolean>(false)
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Reference
  //useContext
  const { printed }: any = useContext(UserContext)

  //to delete all components
  const deletedall = () => {
    setdeleted(true)
  }

  //set all refrence to local storage
  const setRefrence = () => {
    const Ref = {
      work,
      name,
      email,
      phone,
    }
    window.localStorage.setItem('Ref', JSON.stringify(Ref))
  }
  //get all refrence from local storage
  const getRefrence = () => {
    const Ref = window.localStorage.getItem('Ref')
    if (Ref) {
      setwork(JSON.parse(Ref).work)
      setname(JSON.parse(Ref).name)
      setemail(JSON.parse(Ref).email)
      setphone(JSON.parse(Ref).phone)
    }
  }
  useEffect(() => {
    getRefrence()
  }, [])
  useEffect(() => {
    setRefrence()
  }, [work, name, email, phone])

  const workchange = (event) => {
    const newvalue = event.target.value
    setwork(newvalue)
  }

  const namechange = (event) => {
    const newvalue = event.target.value
    setname(newvalue)
  }

  const emailchange = (event) => {
    const newvalue = event.target.value
    setemail(newvalue)
  }

  const phonechange = (event) => {
    const newvalue = event.target.value
    setphone(newvalue)
  }

  return (
    <div
      className={`sm:mt-6 mt-3 sm:mr-2  items-center ${deleted && 'hidden'}`}
    >
      <div className="sm:mt-6 mt-3 sm:mr-2  items-center flex ">
        <AiFillDelete
          className={`text-red-500 xxs ${printed && 'hidden'}`}
          onClick={deletedall}
        />
        <h3 className="sm:text-3xl text-xs font-bold text-gray-700">
          {Text.Reference}
        </h3>
      </div>
      <div className="flex flex-col ">
        <input
          type="text"
          className="flex md:text-xl  mt-1 xxs text-gray-600 mx-auto font-bold sm:mt-3 w-full"
          onChange={workchange}
          value={work}
          placeholder={Text.Work}
        />

        <input
          className="flex md:text-xl  mt-1 xxs text-gray-600 mx-auto font-bold sm:mt-3 w-full"
          onChange={namechange}
          value={name}
          placeholder={Text.Name}
        />
        <div className="flex">
          {' '}
          <span className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 ">
            ئیمەیڵ:
          </span>{' '}
          <input
            className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 w-full"
            onChange={emailchange}
            value={email}
            placeholder={Text.Email}
          />
        </div>
        <div className="flex">
          {' '}
          <span
            className={`flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3`}
          >
            {Text.Phone}:
          </span>{' '}
          <input
            className={`bg-white  text-gray-600 xxs  mx-auto font-bold  md:w-full flex md:text-xl  mr-0 xxs  mt-1 sm:mt-3 w-full ${
              currentLang === 'ar' || currentLang === 'ku' ? 'text-right' : ''
            }`}
            dir={currentLang === 'ar' || currentLang === 'ku' ? 'rtl' : 'ltr'}
            onChange={phonechange}
            value={phone}
            placeholder={Text.Phone}
          />
        </div>
      </div>
    </div>
  )
}

export default Refrence

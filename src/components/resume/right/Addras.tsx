import React, { useEffect, useState, useContext } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { LangContext } from '../../../../context/lang'
import { UserContext } from '../../../../context/context'
type Type = React.FC<{
  icons: any
  addras: any
}>
const Addras = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Address

  const { printed, setprinted }: any = useContext(UserContext)
  const [addrass, setaddrass] = useState<string>('')
  const change = (event) => {
    const newvalue = event.target.value
    setaddrass(newvalue)
  }

  const [email, setemail] = useState<string>('')
  const emailchange = (event) => {
    const newvalue = event.target.value
    setemail(newvalue)
  }
  const [phonedir, setphonedir] = useState<string>('')
  const [phone, setphone] = useState<string>('')
  const phonechange = (event) => {
    const newvalue = event.target.value
    setphone(newvalue)
  }

  //set data to local storage
  const setdata = () => {
    const addrase = {
      addrass,
      email,
      phone,
    }
    window.localStorage.setItem('addrase', JSON.stringify(addrase))
  }

  //get data from local storage
  const getdata = () => {
    const addrase = JSON.parse(window.localStorage.getItem('addrase'))
    if (addrase) {
      setaddrass(addrase.addrass)
      setemail(addrase.email)
      setphone(addrase.phone)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  //set data to local storage
  useEffect(() => {
    setdata()
    setprinted(false)
  }, [addrass, email, phone])

  return (
    <div className="flex flex-col space-y-2 sm:space-y-4   mt-2 mb-2 sm:mt-4 sm:mb-4">
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 ">
        <IoLocationOutline className="sm:text-3xl text-sm text-gray-600 font-bold " />
        <input
          placeholder={Text.Address}
          className="bg-rasas flex md:text-lg text-gray-600 xxs  mx-auto font-bold  md:w-full "
          type="text"
          value={addrass}
          onChange={change}
        />
      </div>

      <div className="flex items-center justify-center space-x-2 sm:space-x-4 ">
        <HiOutlineMail className="sm:text-3xl text-sm text-gray-600 font-bold " />
        <input
          className="bg-rasas flex md:text-lg text-gray-600 xxs  mx-auto font-bold  md:w-full "
          placeholder={Text.Email}
          type="text"
          value={email}
          onChange={emailchange}
        />
      </div>

      <div className="flex items-center justify-center space-x-2 sm:space-x-4 ">
        <AiOutlinePhone className="sm:text-3xl text-sm text-gray-600 font-bold " />
        <input
          className={`bg-rasas flex md:text-lg text-gray-600 xxs  mx-auto font-bold  md:w-full ${
            currentLang === 'ar' || currentLang === 'ku' ? 'text-right' : ''
          }`}
          dir={currentLang === 'ar' || currentLang === 'ku' ? 'rtl' : 'ltr'}
          placeholder="+948"
          type="text"
          value={phone}
          onChange={phonechange}
        />
      </div>
    </div>
  )
}

export default Addras

import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
type Type = React.FC<{
  icons: any
  addras: any
}>
const Addras = () => {
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
  }, [addrass, email, phone])

  return (
    <div className="flex flex-row md:mt-6 mt-3 md:mr-3">
      <div className=" flex flex-col justify-center ">
        <div className="flex items-center space-x-6">
          <IoLocationOutline className="sm:text-3xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
            placeholder="ناونیشان"
            className="bg-rasas flex md:text-lg text-gray-600 xxs  mx-auto font-bold mt-3 md:w-full "
            type="text"
            value={addrass}
            onChange={change}
          />
        </div>

        <div className="flex items-center space-x-6 sm:mt-2">
          <HiOutlineMail className="sm:text-3xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
            placeholder="ئیمەیڵ"
            className="bg-rasas flex md:text-lg  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
            type="text"
            value={email}
            onChange={emailchange}
          />
        </div>

        <div className="flex items-center space-x-6 sm:mt-2">
          <AiOutlinePhone className="sm:text-3xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
          dir='ltr'
            placeholder="+948"
            className="bg-rasas text-right flex md:text-lg  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
            type="text"
            value={phone}
            onChange={phonechange}
          />
        </div>
      </div>
    </div>
  )
}

export default Addras

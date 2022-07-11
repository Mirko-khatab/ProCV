import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
type Type = React.FC<{
  icons: any
  addras: any
}>
const Addras = () => {
  const [addrass, setaddrass] = useState<string>('شارەکەت')
  const change = (event) => {
    const newvalue = event.target.value
    setaddrass(newvalue)
  }

  const [email, setemail] = useState<string>('ئیمەیڵ')
  const emailchange = (event) => {
    const newvalue = event.target.value
    setemail(newvalue)
  }

  const [phone, setphone] = useState<string>('ژمارەی مۆبایل')
  const phonechange = (event) => {
    const newvalue = event.target.value
    setphone(newvalue)
  }

  return (
    <div className="flex flex-row md:mt-6 mt-3 md:mr-3">
      <div className=" flex flex-col justify-center ">
        <div className="flex items-center space-x-6">
       <IoLocationOutline className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
            className="bg-rasas flex md:text-xl text-gray-600 xxs  mx-auto font-bold mt-3 md:w-full "
            type="text"
            value={addrass}
            onChange={change}
          />
        </div>

        <div className="flex items-center space-x-6 sm:mt-2">
          <HiOutlineMail className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
            className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
            type="text"
            value={email}
            onChange={emailchange}
          />
        </div>

        <div className="flex items-center space-x-6 sm:mt-2">
          <AiOutlinePhone className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" />
          <input
            className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
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

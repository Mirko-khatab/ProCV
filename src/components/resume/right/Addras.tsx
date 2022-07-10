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
    <div className="flex flex-row mt-6 mr-3">
      <div className=" flex flex-col justify-center ">
        <div className="flex items-center space-x-6">
          <IoLocationOutline className="md:text-2xl text-xl text-gray-600 font-bold ml-2" />
          <input
            className="bg-rasas flex mx-auto font-bold text-gray-600 mt-3 md:text-xl text-sm"
            type="text"
            value={addrass}
            onChange={change}
          />
        </div>

        <div className="flex items-center space-x-6 mt-2">
          <HiOutlineMail className="text-2xl  text-gray-600 font-bold ml-2" />
          <input
            className=" bg-rasas flex mx-auto font-bold text-gray-600 mt-3 text-xl"
            type="text"
            value={email}
            onChange={emailchange}
          />
        </div>

        <div className="flex items-center space-x-6 mt-2">
          <AiOutlinePhone className="text-2xl  text-gray-600 font-bold ml-2" />
          <input
            className=" bg-rasas flex mx-auto font-bold text-gray-600 mt-3 text-xl"
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

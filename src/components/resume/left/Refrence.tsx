import React, { useState } from 'react'

const Refrence = () => {
  const [work, setwork] = useState<any>('')
  const [name, setname] = useState<any>('')
  const [email, setemail] = useState<any>('')
  const [phone, setphone] = useState<any>('')
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
    <div className="md:mt-6 mr-2 mt-3 ">
      <h3 className="sm:text-3xl text-sm font-bold text-gray-700">
        پشت ڕاستکردنەوەی زانیاری
      </h3>
      <div className="flex flex-col ">
        <input
          type="text"
          className="flex md:text-xl mr-0 mt-1 xxs text-gray-600 mx-auto font-bold sm:mt-3 w-full"
          onChange={workchange}
          value={work}
          placeholder="کارەکەی"
        />

        <input
          className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full"
          onChange={namechange}
          value={name}
          placeholder="ناوەکەی"

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
            placeholder="ئیمەیڵ"

          />
        </div>
        <div className="flex">
          {' '}
          <span className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 ">
            ژمارەمۆبایل:
          </span>{' '}
          <input
          dir='ltr'
            className="flex md:text-xl text-right xxs text-gray-600 mx-auto mt-1 sm:mt-3 w-full"
            onChange={phonechange}
            value={phone}
            placeholder="ژمارەی مۆبایل"

          />
        </div>
      </div>
    </div>
  )
}

export default Refrence

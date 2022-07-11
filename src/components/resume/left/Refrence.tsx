import React, { useState } from 'react'

const Refrence = () => {
  const [work, setwork] = useState<any>('پیشەکەی..')
  const [name,setname] = useState<any>('ناوی کەسەکە...')
  const [email,setemail] = useState<any>('ئیمەیڵ...')
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

        />

        <input className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full"
         onChange={namechange}
         value={name}

        />
     <div className='flex'> <span className='flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 '>ئیمەیڵ:</span>  <input className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full"
             onChange={emailchange}
             value={email}
        />
        </div>
        <div className="flex md:text-xl  mr-0 xxs text-gray-600 mx-auto mt-1 sm:mt-3 md:w-full">
          ژمارەمۆبایل: 770 522
        </div>
      </div>
    </div>
  )
}

export default Refrence

import React, { useEffect, useState } from 'react'

import { AiFillDelete } from 'react-icons/ai'
import { BsPlusCircleDotted } from 'react-icons/bs'

const Education = () => {
  // const change = (event) =>{
  //   const newvalue = event.target.value
  // setedu(newvalue)
  // }

  const [addedu, setaddedu] = useState<any>([])


  const change = (event) => {
    const newvalue = event.target.value
    setaddedu(newvalue)
  }
  //add education value get data in localstorage
  
useEffect(()=>{

  localStorage.setItem('addedu',JSON.stringify(addedu))
},[])





  return (
    <div>
      <div className="mt-20 mr-4 items-center flex ">
        <AiFillDelete className="text-red-500" />
        <h3 className="text-2xl font-bold text-gray-700 ">بڕوانامەی زانستی</h3>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="rounded-full w-4 h-4 mr-2 bg-gray-500"></div>
     
       
      </div>
    </div>
  )
}

export default Education

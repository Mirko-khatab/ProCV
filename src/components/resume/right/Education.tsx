import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiFillDelete } from 'react-icons/ai'
import { BsPlusCircleDotted } from 'react-icons/bs'

const Education = () => {
  // const change = (event) =>{
  //   const newvalue = event.target.value
  // setedu(newvalue)
  // }
  const [addedu, setaddedu] = useState<any>([
    { id: uuidv4(), edu: ''},

  ])
  const [addbutton, setaddbutton] = useState<boolean>(false)


  const [deleted, setdeleted] = useState<boolean>(false)

const addlocal = () => {
  addbutton ==true && setaddedu([...addedu, { id: uuidv4(), edu: ''}])
  addbutton ==true && setaddbutton(false)
}

const added =()=>{
  setaddbutton(true)
  console.log(addbutton)

}

useEffect(()=>{
  addlocal()
},[addbutton])


  return (
    <div>
      <div className="mt-20 mr-4 items-center flex ">
        <AiFillDelete className="text-red-500" />
        <h3 className="text-2xl font-bold text-gray-700 ">بڕوانامەی زانستی</h3>
      </div>

      {addedu.map((e) => {
        return (
          <div className="flex items-center space-x-4 mt-6">
            <AiFillDelete className="text-red-500" />
            <div className="rounded-full w-4 h-4 mr-2 bg-gray-500"></div>
            <div key={e.id}>{e.edu}</div> <input className=' bg-gray-200 flex mx-auto font-bold text-gray-600 mt-3' type="text" onChange = {addlocal}/>
            <BsPlusCircleDotted onClick={added}/>
          </div>
        )
      })}
    </div>
  )
}

export default Education

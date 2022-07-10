import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  edutitle: any
}>

const Addskill: Type = ({ edutitle }) => {
  const [eduvalue, seteduvalue] = useState<string>('')
  const [addbutton, setaddbutton] = useState<boolean>(false)

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    edutitle(eduvalue)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex items-center space-x-4 mt-6">
          <input
            className=" bg-rasas flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="زیاد کردنی کارامەی "
            onChange={(e) => {
              seteduvalue(e.target.value)
            }}
          />
          <input
            type="submit"
            value="add"
            className="p-1 text-white bg-gray-400 rounded-lg"
          />
        </div>
      </form>
    </div>
  )
}

export default Addskill


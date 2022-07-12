import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  edutitle: any
}>

const Addedu: Type = ({ edutitle }) => {
  const [eduvalue, seteduvalue] = useState<string>('')
  const [addbutton, setaddbutton] = useState<boolean>(false)

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    edutitle(eduvalue)
  }

  return (
    <div>
      <div className="flex items-center sm:space-x-3 sm:mt-3 mt-2">
        <form onSubmit={handlesubmit}>
          <div className="flex items-center justify-between space-x-4 sm:mt-6">
            <input
              className="bg-rasas flex sm:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 sm:w-full w-20 mb-3"
              type="text"
              placeholder="زیاد کردنی بڕوانامە "
              onChange={(e) => {
                seteduvalue(e.target.value)
              }}
            />

            <input
              type="submit"
              value="add"
              className="sm:text-sm bg-gray-400 text-gray-200 text-sm rounded-xl px-1 sm:px-2 sm:py-1 xxs  font-bold mr-1 sm:mr-2"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addedu

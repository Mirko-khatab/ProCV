import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  exptitle: any
}>

const Addexpereans: Type = ({ exptitle }) => {
  const [expvalue, setexpvalue] = useState<string>('')
  const [addbutton, setaddbutton] = useState<boolean>(false)

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    exptitle(expvalue)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex items-center space-x-4 mt-6">
          <input
            className="  flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="زیادکردنی ئەزموون لێرە.... "
            onChange={(e) => {
              setexpvalue(e.target.value)
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

export default Addexpereans

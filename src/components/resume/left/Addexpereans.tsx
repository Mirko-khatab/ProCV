import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  exptitle: any
  expdate: any
  expdsc: any
}>

const Addexpereans: Type = ({ exptitle }) => {
  const [exptitlestate, setexptitlestate] = useState<string>('')
  const [expdatevalue, setexpdatevalue] = useState<string>('')

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    exptitle(exptitlestate, expdatevalue)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex items-center space-x-4 mt-6">
          <input
            className="  flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="سەردێڕی کارەکە.... "
            onChange={(e) => {
              setexptitlestate(e.target.value)
            }}
          />
          <input
            className="  flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="2019oct -2021oct"
            onChange={(e) => {
              setexpdatevalue(e.target.value)
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

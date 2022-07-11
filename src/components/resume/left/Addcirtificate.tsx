import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  cirtification: any
}>

const Addcirtification: Type = ({ cirtification }) => {
  const [certification, setcertification] = useState<string>('')
  const [details, setdetails] = useState<string>('')

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    cirtification(certification, details)
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
              setcertification(e.target.value)
            }}
          />
          <input
            className="  flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="کورتەیەك لەسەری..."
            onChange={(e) => {
              setdetails(e.target.value)
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

export default Addcirtification

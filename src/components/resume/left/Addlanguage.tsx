import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  languagetitle: any
}>

const Addlanguage: Type = ({ languagetitle }) => {
  const [language, setlanguage] = useState<string>('')

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    languagetitle(language)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex  items-center space-x-4 mt-6">
          <input
            className="  flex mx-auto font-bold text-gray-600 mt-3"
            type="text"
            placeholder="زمان..."
            onChange={(e) => {
              setlanguage(e.target.value)
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

export default Addlanguage

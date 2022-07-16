import React, { useState, useContext } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { LangContext } from '../../../../context/lang'
type Type = React.FC<{
  languagetitle: any
}>

const Addlanguage: Type = ({ languagetitle }) => {
  const [language, setlanguage] = useState<string>('')

  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Language

  //submit our form

  const handlesubmit = (e: any) => {
    e.preventDefault()
    languagetitle(language)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex  items-center sm:space-x-4 sm:mt-6">
          <input
            className="bg-rasas flex sm:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 sm:w-full w-20 mb-3"
            type="text"
            placeholder={Text.Addlanguage}
            onChange={(e) => {
              setlanguage(e.target.value)
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
  )
}

export default Addlanguage

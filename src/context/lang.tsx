import React, { useState, createContext } from 'react'
import dictionary from '../lang'

type Context = {
  lang?: 'en' | 'ku' | 'ar'
  setLang?: React.Dispatch<React.SetStateAction<'en' | 'ku' | 'ar'>>
  dictionary?: any
}

export const LangContext = createContext<Context>({})

const LangProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<'en' | 'ku' | 'ar'>('en')
  return (
    <LangContext.Provider
      value={{ lang, setLang, dictionary: dictionary[lang] }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider

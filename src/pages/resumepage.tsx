import React,{useState,useContext} from 'react'
import Mainresume from '../components/resume/Mainresume'
import { LangContext } from '../../context/lang'
const resumepage = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Navbar
  return (
    <div dir={currentLang === 'ar' || currentLang === 'ku' ? 'rtl' : 'ltr'}>
      <Mainresume />
    </div>
  )
}

export default resumepage

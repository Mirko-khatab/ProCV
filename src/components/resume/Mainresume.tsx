import React, { useEffect, useContext } from 'react'
import Expereans from './left/Expereans'
import Head from './right/Head'
import { UserContext } from '../../../context/context'
import { LangContext } from '../../../context/lang'
const Mainresume = () => {
  const { printed, setprinted }: any = useContext(UserContext)

  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Footer
  // print resume to pdf file and download it as a pdf file a4 paper
  const print = () => {
    setprinted(true)
  }



  console.log('before --> ' + printed)
  useEffect(() => {
  print()
  }, [printed])
  console.log('after --> ' + printed)
  return (
    <>
      <div className="main-page">
        <div className="sub-page">
          <div className="grid grid-cols-3 ">
            <div className="sub-page w-full bg-rasas">
              <Head />
            </div>
            <div className="col-span-2 ">
              <Expereans />
            </div>
          </div>
        </div>
      </div>
      <button
        className={` px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md  flex mx-auto ${
          printed && 'hidden'
        }`}
        onClick={() => {
          setprinted(true)
        }}
      >
        print
      </button>
      <h3
        className={`text-gray-700 xxs sm:text-lg text-center w-44 mx-auto mt-2 ${
          printed && 'hidden'
        }`}
      >
  {Text.Print}
      </h3>
      <h3
        className={`text-gray-700 xxs sm:text-lg text-center w-44 mx-auto mt-2 ${
          printed && 'hidden'
        }`}
      >
        All ownership reserved to{' '}
        <a href="https://m.facebook.com/mirko.kawa.921" className='text-blue-800'>Mirko</a>
      </h3>
    </>
  )
}

export default Mainresume

import Link from 'next/link'
import React, { useContext } from 'react'
import { LangContext } from '../../context/lang'

const Main = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Index

  return (
    <div className="space-y-16 container p-4 mx-auto">
      <div className="flex mx-auto flex-col items-center  sm:mt-28 mt-16 sm:space-y-8 space-y-4 ">
        <h3 className="text-xl sm:text-4xl font-bold  leading-8 text-gray-900 text-center">
          {Text.Indexhead}
        </h3>
        <p className="text-base leading-8 text-gray-500 text-center  ">
          {Text.Indexhead2}
        </p>
        <Link href="/resumepage">
          <a className="px-10 py-3 bg-gray-500  text-gray-200 rounded-md font-bold">
            {Text.Button}
          </a>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-4  mt-10">
        <div>
          <img src="../img/work.png" alt="place" className="w-full sm:w-96 " />
        </div>
        <div>
          <h3 className="text-sm sm:text-xl w-full lg:w-1/2 leading-7 sm:leading-9 text-center">
            {Text.Section1}
          </h3>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-center space-y-4 space-x-4  mt-10">
        <div>
          <h3 className="text-sm sm:text-xl w-full lg:w-1/2 leading-7 sm:leading-9 text-center">
            {Text.Section2}
          </h3>
        </div>
        <div>
          <img
            src="../img/3device.png"
            alt="place"
            className="w-full sm:w-96 "
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 mt-10">
        <div>
          <img
            src="../img/index2.png"
            alt="place"
            className="w-full sm:w-96 "
          />
        </div>
        <div>
          <h3 className="text-sm sm:text-xl w-full lg:w-1/2 leading-7 sm:leading-9 text-center">
            {Text.Section3}
          </h3>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-4 space-y-4 mt-10">
        <div>
          <h3 className="text-sm sm:text-xl w-full lg:w-1/2 leading-7 sm:leading-9 text-center">
            {Text.Section4}
          </h3>
        </div>
        <div>
          <img src="../img/free.png" alt="place" className="w-full sm:w-96 " />
        </div>
      </div>
    </div>
  )
}

export default Main

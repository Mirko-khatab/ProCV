import React, { useContext } from 'react'
import { LangContext } from '../context/lang'
const contact = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Contact


  return (
    <div>
      <div className="flex items-center mx-auto">
        <div className="w-full max-w-7xl md:max-w-7xl lg:max-w-7xl mx-auto p-5 undefined">
          <div className="lg:ml-48 lg:mr-48 max-w-screen-xl mx-auto p-8">
            <h2 className="text-3xl p-3  font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
              {Text.Header}
            </h2>
            <ul className=" items-start gap-8 grid grid-col-2">
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900  mr-2">
                  {Text.title1}
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500  mr-1 ">
                    {Text.body1}
                  </p>
                </p>
              </li>
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900  mr-2">
                  {Text.title2}
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500  mr-1">
                    {Text.body2}
                    <span dir="ltr">{Text.zhmaraka} ✅</span> Fastpay{' '}
                  </p>
                </p>
              </li>
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900  mr-2">
                  {Text.title3}
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500  mr-1">
                    {Text.body3}
                  </p>
                </p>
              </li>

              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900  mr-2">
                  {Text.title4}{' '}
                </p>
                <p className="mt-2  m-1">
                  <p className="text-base leading-6 text-gray-500">
                    <a
                      className="text-blue-400"
                      href="https://www.facebook.com/mirko.kawa.921"
                      target="blank"
                    >
                      {Text.title5}
                    </a>
                  </p>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center mx-auto p-8">
        <h2 className="text-xl p-3  font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
          {Text.title6}
        </h2>
      </div>
      <div className="sm:flex block items-center justify-center sm:space-x-4 space-y-6 mt-10">
        <div>
          <img src="../img/tailwind.png" alt="place" className=" sm:w-96 " />
        </div>
        <div>
          <img src="../img/react.png" alt="place" className=" sm:w-96 " />
        </div>
        <div>
          <img src="../img/nextjs.png" alt="place" className=" sm:w-96 " />
        </div>
      </div>

      <div className=" flex justify-center items-center mx-auto p-8 mt-10">
        <h2 className="text-xl p-3  font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
          {Text.title7}
        </h2>
      </div>
      <div className="sm:flex block items-center justify-center sm:space-x-4 space-y-6 mt-10">
        <div>
          <img src="../img/web.png" alt="place" className=" sm:w-96 " />
        </div>
        <div>
          <img src="../img/mobile.png" alt="place" className=" sm:w-96 " />
        </div>
      </div>
    </div>
  )
}

export default contact

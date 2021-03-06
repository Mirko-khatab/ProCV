import React, { useState, useEffect, useContext } from 'react'
import { AiFillDelete, AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai'
import { LangContext } from '../../../context/lang'
import { UserContext } from '../../../context/context'
import Social from './Social'
import Addras from './Addras'
import Profile from './Profile'
import Image from 'next/image'

import Education from './Education'
import Skill from './Skill'

// import Education from './Education'

const Head: React.FC = () => {
  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Header
  // UserContext
  const { printed, setprinted }: any = useContext(UserContext)
  console.log('hawale printedm pe ble lera --> ' + printed)
  const [img, setimg] = useState<boolean>(false)

  const [imgUrl, setimgUrl] = useState<string>('')
  const [fileeffect, setfileeffect] = useState<boolean>(false)
  const [changeimg, setchageimg] = useState<boolean>(false)

  // encoder genarator
  const EncoderFileBase64 = (file) => {
    // make reader to reader exernal
    console.log('hare')
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => {
        const Base64 = reader.result
        if (Base64) {
          setfileeffect(true)

          console.log('Base64 -----> ', Base64)
          window.localStorage.setItem('Base64', JSON.stringify(Base64))
        }
      }
      // if we have error
      reader.onerror = (error) => {
        console.log('error : ' + error)
      }
    }
  }

  const Handlegetdata = (mydata) => {
    console.log(mydata)
    EncoderFileBase64(mydata)
  }
  // fetchent img file and decrept jare bo dwae ama cha akam

  useEffect(() => {
    getfunction()
    setchageimg(false)
    setprinted(false)
  }, [fileeffect,])

  const getfunction = async () => {
    const check = await JSON.parse(localStorage.getItem('Base64'))
    setimgUrl(check)
    console.log(check)
  }

  //delete function
  const deleted = () => {
    setimg(!img)
    console.log(img)
  }
  const [name, setname] = useState<any>('')

  const [work, setwork] = useState<any>('')
  //set data to local storage
  const setdata = () => {
    const names = {
      name,
      work,
    }
    window.localStorage.setItem('names', JSON.stringify(names))
  }
  //get data from local storage
  const getdata = () => {
    const names = JSON.parse(window.localStorage.getItem('names'))
    if (names) {
      setname(names.name)
      setwork(names.work)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  //set data to local storage
  useEffect(() => {
    setdata()
    setprinted(false)
  }, [name, work])

  //edit function
  const Edit = () => {
    setchageimg(true)
    setfileeffect(false)
  }
  
  return (
    <div>
      <div className={`${img && 'hidden'}`}>
        <div className="justify-center flex">
          <AiFillDelete
            className={`text-red-600 sm:text-2xl xss ${printed && 'hidden'}`}
            onClick={deleted}
          />
          <AiOutlineEdit
            className={`text-yellow-600 sm:text-2xl xss ${printed && 'hidden'}`}
            onClick={Edit}
          />

          <img
            className={`mx-auto mt-2 rounded-full sm:w-24 sm:h-24  w-10 h-10 
            ${!imgUrl || (changeimg && 'hidden')} ${!imgUrl && 'hidden'}`}
            src={`${imgUrl}`}
            alt=""
          />

          <div
            className={`relative  rounded-lg border-dashed border-2 mt-2 border-blue-700 bg-gray-100 flex justify-center items-center mx-auto  sm:w-24 sm:h-24  w-11 h-11 
            ${!changeimg && imgUrl && 'hidden'}`}
          >
            <div className="absolute">
              <div className="flex flex-col justify-center items-center">
                {' '}
                <img
                  src="/img/file.png"
                  className="mx-auto mt-2 sm:w-16 sm:h-16  w-6 h-6"
                  alt="rasm"
                />
              </div>
            </div>

            <input
              type="file"
              className="max-h-sm max-w-sm w-full opacity-0"
              onChange={(e) => Handlegetdata(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <input
        className="text-center bg-rasas flex md:text-xl text-gray-800  xxs  mx-auto font-bold mt-6 md:w-full  "
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder={Text.Name}
      />
      <input
        className="text-center bg-rasas md:text-sm flex  xxs text-gray-700 mx-auto font-bold sm:mt-3 mt-1 md:w-full  "
        type="text"
        value={work}
        onChange={(e) => setwork(e.target.value)}
        placeholder={Text.Work}
      />

      <Addras />
      <Profile />
      <Social />
      <Education />
      <Skill />
    </div>
  )
}

export default Head

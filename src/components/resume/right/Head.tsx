import React, { useState, useEffect, useContext, createContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { UserContext } from '../../../../context/context'
import Social from './Social'
import Addras from './Addras'
import Profile from './Profile'
import Image from 'next/image'
import Img_url from '../../../../public/img/file.png'
import Education from './Education'

// import Education from './Education'

const Head: React.FC = () => {
  // UserContext
  const { setsendfile }: any = useContext(UserContext)

  const [img, setimg] = useState<boolean>(false)

  const [imgUrl, setimgUrl] = useState<string>('')

  // encoder genarator

  const EncoderFileBase64 = (file) => {
    // make reader to reader exernal
    console.log('hare')
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => {
        const Base64 = reader.result
        console.log('Base64 -----> ', Base64)
        window.localStorage.setItem('Base64', JSON.stringify(Base64))
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
  }, [])

  const getfunction = async () => {
    const check = await JSON.parse(window.localStorage.getItem('Base64'))
    setimgUrl(check)
    console.log(check)
    return

    const decode = async (str: string) => {
      console.log('hare ', str)
      console.log(await decodeURIComponent(str))
    }

    decode(check)
  }

  //to uploding file

  //delete function
  const deleted = () => {
    setimg(!img)
    console.log(img)
  }
  const [name, setname] = useState<any>('ناوەکەت لێرەبنووسە')
  const change = (event) => {
    const newvalue = event.target.value
    setname(newvalue)
  }
  const [work, setwork] = useState<any>('کارەکەت لێرە')
  const change2 = (event) => {
    const newvalue = event.target.value
    setwork(newvalue)
  }
  return (
    <div>
      <div className={`${img && 'hidden'}`}>
        <div className="flex  justify-center">
          <AiFillDelete className="text-red-600 text-2xl" onClick={deleted} />

          <img  className="mx-auto mt-2 rounded-full w-40 h-40"  src={`${imgUrl}`} alt="" />

          <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
            <div className="absolute">
              <div className="flex flex-col items-center">
                {' '}
                <Image  src={Img_url} />{' '}
                <span className="block text-gray-400 font-normal">
                  Attach your image here
                </span>{' '}
              </div>
            </div>

            <input
              type="file"
              className="h-full w-full opacity-0"
              name=""
              onChange={(e) => Handlegetdata(e.target.files[0])}
            />
          </div> 
      
           
        </div>
     
      </div>
      <input
        className="text-center bg-gray-200 flex mx-auto font-bold mt-3"
        type="text"
        value={name}
        onChange={change}
      />
      <input
        className="text-center text-sm bg-gray-200 flex mx-auto font-bold mt-3"
        type="text"
        value={work}
        onChange={change2}
      />

      <Addras />
      <Social />
      <Profile />
      <Education />
    </div>
  )
}

export default Head

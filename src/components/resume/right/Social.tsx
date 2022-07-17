import React, { useState, useEffect, useContext } from 'react'
import { LangContext } from '../../../../context/lang'
import { UserContext } from '../../../../context/context'
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiFillDelete,
} from 'react-icons/ai'

const Social = () => {
  const [deletedin, setdeletein] = useState<boolean>(false)
  const [deletedfa, setdeletefa] = useState<boolean>(false)
  const [deletedLi, setdeleteLi] = useState<boolean>(false)
  const [instagram, setinstagram] = useState<string>('')
  const [facebook, setfacebook] = useState<string>('')
  const [linkedin, setlinkedin] = useState<string>('')

  const { lang, setLang, dictionary }: any = useContext(LangContext)

  const currentLang = lang
  const Text = dictionary.Social

  const { printed }: any = useContext(UserContext)

  // set social to local storage
  const setSocial = () => {
    window.localStorage.setItem('instagram', JSON.stringify(instagram))
    window.localStorage.setItem('facebook', JSON.stringify(facebook))
    window.localStorage.setItem('linkedin', JSON.stringify(linkedin))
  }
  // get social from local storage
  const getSocial = () => {
    const instagram = window.localStorage.getItem('instagram')
    const facebook = window.localStorage.getItem('facebook')
    const linkedin = window.localStorage.getItem('linkedin')
    if (instagram) {
      setinstagram(JSON.parse(instagram))
    }
    if (facebook) {
      setfacebook(JSON.parse(facebook))
    }
    if (linkedin) {
      setlinkedin(JSON.parse(linkedin))
    }
  }
  useEffect(() => {
    getSocial()
  }, [])
  useEffect(() => {
    setSocial()
  }, [instagram, facebook, linkedin])

  //delete instagram
  const deleteinsta = () => {
    setdeletein(!deletedin)
  }
  //delete facebook
  const deletefacebook = () => {
    setdeletefa(!deletedfa)
  }
  //delete Linkedinlist
  const deletelinked = () => {
    setdeleteLi(!deletedLi)
  }

  return (
    <>
      <div
        className={`sm:mt-4 mt-1 sm:mr-2 ml-2 sm:ml-1 ${
          deletedLi && deletedfa && deletedin && 'hidden'
        }`}
      >
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700  ">
          {Text.Social}
        </h3>
        <div className=" flex flex-col justify-center ">
          <div
            className={`flex items-center sm:space-x-3 sm:mt-3 mt-2  ${
              deletedin && 'hidden'
            } `}
          >
            <AiFillDelete
              className={`text-red-500 text-sm sm:text-xl ${
                printed && 'hidden'
              }`}
              onClick={deleteinsta}
            />
            <div>
              <AiOutlineInstagram className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 sm:ml-2" />
            </div>
            <input
              className="bg-rasas flex sm:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 sm:w-full w-20 mb-1"
              type="text"
              value={instagram}
              onChange={(e) => setinstagram(e.target.value)}
              placeholder="instagram"
            />
          </div>

          <div
            className={`flex items-center sm:space-x-3 sm:mt-3 mt-2  ${
              deletedfa && 'hidden'
            } `}
          >
            <AiFillDelete
              className={`text-red-500 text-sm sm:text-xl ${
                printed && 'hidden'
              }`}
              onClick={deletefacebook}
            />
            <div>
              <AiOutlineFacebook className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 sm:ml-2" />
            </div>
            <input
              className="bg-rasas flex sm:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 sm:w-full w-20 mb-1"
              type="text"
              value={facebook}
              onChange={(e) => setfacebook(e.target.value)}
              placeholder="facebook"
            />
          </div>

          <div
            className={`flex items-center sm:space-x-3 sm:mt-3 mt-2  ${
              deletedLi && 'hidden'
            } `}
          >
            <AiFillDelete
              className={`text-red-500 text-sm sm:text-xl ${
                printed && 'hidden'
              }`}
              onClick={deletelinked}
            />
            <div>
              <AiOutlineLinkedin className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 sm:ml-2" />
            </div>
            <input
              className="bg-rasas flex sm:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 sm:w-full w-20 mb-1"
              type="text"
              value={linkedin}
              onChange={(e) => setlinkedin(e.target.value)}
              placeholder="linkedin"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Social

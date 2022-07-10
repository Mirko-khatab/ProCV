import React, { useState } from 'react'
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
  const [addrass, setaddrass] = useState<string>('instagram')
  const change = (event) => {
    const newvalue = event.target.value
    setaddrass(newvalue)
  }

  const [email, setemail] = useState<string>('facebook')
  const emailchange = (event) => {
    const newvalue = event.target.value
    setemail(newvalue)
  }

  const [phone, setphone] = useState<string>('Linkedlist')
  const phonechange = (event) => {
    const newvalue = event.target.value
    setphone(newvalue)
  }

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
        className={`mt-4 mr-2 ${
          deletedLi && deletedfa && deletedin && 'hidden'
        }`}
      >
        <h3 className="text-3xl  font-bold text-gray-700">سۆشیال</h3>
        <div className=" flex flex-col justify-center ">
          <div
            className={`flex items-center space-x-6 mt-4 ${
              deletedin && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deleteinsta}
            /> */}
            <AiOutlineInstagram className="text-3xl text-gray-600 font-bold ml-2" />
            <input
              className=" bg-rasas text-xl flex mx-auto font-bold text-gray-600 mt-3"
              type="text"
              value={addrass}
              onChange={change}
            />
          </div>

          <div
            className={`flex items-center space-x-6 mt-1 ${
              deletedfa && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deletefacebook}
            /> */}
            <AiOutlineFacebook className="text-3xl text-gray-600 font-bold ml-2" />
            <input
              className=" bg-rasas text-xl flex mx-auto font-bold text-gray-600 mt-3"
              type="text"
              value={email}
              onChange={emailchange}
            />
          </div>

          <div
            className={`flex items-center space-x-6 mt-1 ${
              deletedLi && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deletelinked}
            /> */}
            <AiOutlineLinkedin className="text-3xl  text-gray-600 font-bold ml-2" />
            <input
              className=" bg-rasas  text-xl flex mx-auto font-bold text-gray-600 mt-3"
              type="text"
              value={phone}
              onChange={phonechange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Social

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
        className={`sm:mt-4 mt-1 sm:mr-2 mr-1 ${
          deletedLi && deletedfa && deletedin && 'hidden'
        }`}
      >
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700">سۆشیال</h3>
        <div className=" flex flex-col justify-center ">


          <div
            className={`flex items-center space-x-6 sm:mt-2  ${
              deletedin && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deleteinsta}
            /> */}
            <div><AiOutlineInstagram className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" /></div>
            <input
              className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
              type="text"
              value={addrass}
              onChange={change}
            />
          </div>

          <div
            className={`flex items-center space-x-6 sm:mt-2  ${
              deletedfa && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deletefacebook}
            /> */}
         <div>   <AiOutlineFacebook className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" /></div>
            <input
              className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
              type="text"
              value={email}
              onChange={emailchange}
            />
          </div>

          <div
            className={`flex items-center space-x-6 sm:mt-2  ${
              deletedLi && 'hidden'
            } `}
          >
            {/* <AiFillDelete
              className="text-red-500 text-sm"
              onClick={deletelinked}
            /> */}
          <div><AiOutlineLinkedin className="sm:text-2xl text-sm text-gray-600 font-bold ml-1 md:ml-2" /></div>
            <input
              className="bg-rasas flex md:text-xl  xxs text-gray-600 mx-auto font-bold mt-3 md:w-full "
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

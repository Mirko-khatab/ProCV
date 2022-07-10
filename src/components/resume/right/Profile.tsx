import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Profile = () => {
  const change = () => {}
  const [deleted, setdeleted] = useState<boolean>(false)
  const [profile, setprofile] = useState<String>('')

  const ondelete = () => {
    setdeleted(!deleted)
  }
  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="sm:mt-10 mt-6 mr-4 items-center flex ">
        {/* <AiFillDelete className='text-red-500' onClick={ondelete}/> */}
        <h3 className="sm:text-3xl text-xl font-bold text-gray-700 ">
          پڕۆفایل
        </h3>
      </div>
      <textarea
        placeholder="دەربارەی خۆت بدوێ"
        className="  bg-rasas sm:text-sm text-xs flex font-bold text-gray-600 mt-4 w-full  indent-8"
        onChange={change}
      >
        {profile}
      </textarea>
    </div>
  )
}

export default Profile

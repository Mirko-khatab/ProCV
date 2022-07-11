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
      <div className="md:mt-10 mt-3 md:mr-4 items-center flex ">
        {/* <AiFillDelete className='text-red-500' onClick={ondelete}/> */}
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700 ">
          پڕۆفایل
        </h3>
      </div>
      <textarea
        placeholder="دەربارەی خۆت بدوێ"
        className=" bg-rasas flex md:text-xl text-gray-800  xxs  mx-auto font-bold mt-3 w-full "
        onChange={change}
      >
        {profile}
      </textarea>
    </div>
  )
}

export default Profile

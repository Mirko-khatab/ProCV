import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Profile = () => {
  const [deleted, setdeleted] = useState<boolean>(false)
  const [profile, setprofile] = useState<String>('')

  //set profile to local storage
  const setprofiletolocalstorage = () => {
    window.localStorage.setItem('profile', JSON.stringify(profile))
  }
  //get profile from local storage
  const getprofilefromlocalstorage = () => {
    const profile = JSON.parse(window.localStorage.getItem('profile'))
    if (profile) {
      setprofile(profile)
    }
  }
  useEffect(() => {
    getprofilefromlocalstorage()
  }, [])
  //set profile to local storage
  useEffect(() => {
    setprofiletolocalstorage()
  }, [profile])

  const ondelete = () => {
    setdeleted(!deleted)
  }
  return (
    <div className={`${deleted && 'hidden'}`}>
      <div className="md:mt-10 mt-3 md:mr-4 items-center flex ">
        <AiFillDelete className="text-red-500 xxs" onClick={ondelete} />
        <h3 className="sm:text-3xl text-sm font-bold text-gray-700 ">
          پڕۆفایل
        </h3>
      </div>
      <textarea
        placeholder="دەربارەی خۆت بدوێ"
        className=" bg-rasas flex sm:text-sm sm:mr-1 text-gray-800  xxs  mx-auto font-bold mt-3 w-full "
        onChange={(e) => setprofile(e.target.value)}
        value={profile}
      >
        {profile}
      </textarea>
    </div>
  )
}

export default Profile

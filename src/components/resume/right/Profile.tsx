import React, { useState } from 'react'
import {AiFillDelete} from "react-icons/ai"



const Profile = () => {
    const change =()=>{

    }
    const [deleted ,setdeleted] = useState<boolean>(false)
    const [profile,setprofile]=useState<String>('')
      
     const ondelete = ()=>{
      setdeleted(!deleted)
     
     }
  return (
    <div className={`${deleted && 'hidden'}`}>
         <div className='mt-20 mr-4 items-center flex '>
            <AiFillDelete className='text-red-500' onClick={ondelete}/>
      <h3 className='text-2xl font-bold text-gray-700 '>پڕۆفایل</h3>
      </div>
      <textarea placeholder='دەربارەی خۆت بدوێ' className=' bg-gray-200 flex font-bold text-gray-600 mt-4 w-full text-sm indent-8'  onChange = {change}>{profile}</textarea>
   
      </div>
    
  )
}

export default Profile

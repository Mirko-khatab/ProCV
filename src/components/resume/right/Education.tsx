import React,{useState} from 'react'

import {IoLocationSharp} from 'react-icons/io5'
import {AiFillPhone ,AiFillDelete} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
  const [edu,setedu]=useState<any>([
        {
        id:1,
        edutitle:'baseceducation'
    },
    {
        id:2,
        edutitle:'baseceducation'
    },
    {
        id:3,
        edutitle:'baseceducation'
    }
    
])

const Education = () => {

  
    const change = (event) =>{
      const newvalue = event.target.value
    setedu(newvalue)
    }

    const [email,setemail]=useState<string>('ئیمەیڵ')
    const emailchange = (event) =>{
      const newvalue = event.target.value
    setemail(newvalue)
    }

    const [phone,setphone]=useState<string>('ژمارەی مۆبایل')
    const phonechange = (event) =>{
      const newvalue = event.target.value
    setphone(newvalue)
    }

  return (
    <div>
    <div className='mt-20 mr-4 items-center flex '>
       <AiFillDelete className='text-red-500'/>
 <h3 className='text-2xl font-bold text-gray-700 '>بڕوانامەی زانستی</h3>
 </div>

  {edu.map((e) => (
        
 <div className='flex items-center justify-center mt-3'>
 <div className='rounded-full w-4 h-4 mr-2 bg-gray-500'></div>
 <input className='bg-gray-200 flex mx-auto font-bold mt-3' type="text" value={edu.edutitle} onChange = {change}/>
</div>
      ))}



 </div>
  )
}

export default Education

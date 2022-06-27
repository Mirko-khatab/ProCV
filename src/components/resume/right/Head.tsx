import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'


const Head = () => {
  const [name,setname]=useState<any>('ناوەکەت لێرەبنووسە')
  const change = (event) =>{
    const newvalue = event.target.value
     setname(newvalue)
  }
  return (
    <div>
        <div className='flex'>
        <AiFillDelete className='text-red-600 text-2xl'/>
        <FiEdit className='text-yellow-400 text-2xl'/>
        </div>
    <img className='mx-auto mt-2 rounded-full w-40 h-40'  src="/img/m.jpeg" alt="rasmaka" />
   <input className='text-center flex mx-auto font-bold mt-3' type="text" value={name} onChange = {change}/>
  
    </div>
  )
}

export default Head
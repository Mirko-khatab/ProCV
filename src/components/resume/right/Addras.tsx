import React, {useState} from 'react'
import {VscLocation} from 'react-icons/vsc'
 type Type =React.FC<{
    icons:any
    addras:any
 }>
const Addras:Type= () => {
    const [addrass,setaddrass]=useState<any>('شارەکەت')
    const change = (event) =>{
      const newvalue = event.target.value
    setaddrass(newvalue)
    }
  return (
    <div className='flex flex-col space-y-8'>
        <div className=' flex flex-row space-x-3'>
            <VscLocation/>
        <input className='text-center bg-gray-200 flex mx-auto font-bold mt-3' type="text" value={addrass} onChange = {change}/>
    </div>
    </div>
  )
}

export default Addras

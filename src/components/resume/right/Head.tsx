import React, { useState,useEffect } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import Social from './Social'
import Addras from './Addras'
import Profile from './Profile'
// import Education from './Education'

const Head = () => {
  const [img,setimg] =useState<boolean>(false)
  const [file,setfile] = useState<string>('')

useEffect( ()=>{
uplodefile()
  },[])

//to uploding file 
const uplodefile =()=>{
  const check = localStorage.getItem('filename')
  if(check){
    const fileimg=(e)=>{
      setfile(e.target.value)
      {file}
      
    }
  }



}

//delete function
const deleted =()=>{
setimg(!img)
console.log(img)
}
  const [name,setname]=useState<any>('ناوەکەت لێرەبنووسە')
  const change = (event) =>{
    const newvalue = event.target.value
     setname(newvalue)
  }
  const [work,setwork]=useState<any>('کارەکەت لێرە')
  const change2 = (event) =>{
    const newvalue = event.target.value
     setwork(newvalue)
  }
  return (
    <div>


 <div className={`${img && 'hidden'}`}>
   <div className='flex justify-center' >
   <AiFillDelete className='text-red-600 text-xl' onClick={deleted}/>
   <input type="file" className='mr-8 ' onChange={uplodefile}  />
 
    
    {/* <img className='mx-auto mt-2 rounded-full w-40 h-40'  src="/img/m.jpeg" alt="rasmaka" /> */}
    </div>
    <button onClick={uplodefile} className='mr-32 px-4 py-2 bg-gray-400 rounded-md text-white'>بارکردنی وێنە</button>  </div>
   <input className='text-center bg-gray-200 flex mx-auto font-bold mt-3' type="text" value={name} onChange = {change}/>
   <input className='text-center text-sm bg-gray-200 flex mx-auto font-bold mt-3' type="text" value={work} onChange = {change2}/>

   <Addras/>
   <Social/>
   <Profile/>
   {/* <Education/> */}
    </div>



  )
}

export default Head

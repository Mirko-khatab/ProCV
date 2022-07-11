import React from 'react'
import Expereans from './resume/left/Expereans'
import Head from './resume/right/Head'

const Main = () => {
  return (
 

<div className="main-page">
<div className="sub-page">

<div className="grid grid-cols-3 ">
  <div className='sub-page w-full bg-rasas' >
      
<Head/>
    
  
  
  </div>
  <div className='col-span-2 '>
  
 <Expereans/>
  </div>
</div>

</div>    
</div>
  )
}

export default Main

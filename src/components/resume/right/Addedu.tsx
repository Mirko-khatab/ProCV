import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
type Type = React.FC<{
  edutitle: any
}>

const Addedu: Type = ({ edutitle }) => {
    const [eduvalue, seteduvalue] = useState<string>('')
    const [addbutton, setaddbutton] = useState<boolean>(false)

 
    //submit our form   

    const handlesubmit=(e:any)=>{
        e.preventDefault()
        edutitle(eduvalue)
        
    }

  return <div>



    <form onSubmit={handlesubmit}>
    <div className="flex items-center space-x-4 mt-6">
        <input
          className=" bg-gray-200 flex mx-auto font-bold text-gray-600 mt-3"
          type="text"
          placeholder='بڕوانامەی زانستی'
          onChange={(e) => {
            seteduvalue(e.target.value)
          }}
        />
        <input type='submit' value='add'/>
      </div>
    </form>
  </div>
}

export default Addedu

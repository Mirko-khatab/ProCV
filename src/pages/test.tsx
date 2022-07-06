import React from 'react'

const test = () => {
  // decode
  const decode = async (str: string) => {
    console.log(await decodeURIComponent(str))
  }

  // encode
  const encode = async (str: string) => {
    console.log(await encodeURIComponent(str))
  }

  return (
    <div>
      hello
     
      <input
        className="border-1"
        type="text"
        placeholder='decode'
        onChange={(e) => {
          decode(e.target.value)
        }}
      />
      <input
        className="border-1"
        type="text"
        placeholder='encode'
        onChange={(e) => {
          encode(e.target.value)
        }}
      />
     
    </div>
  )
}

export default test

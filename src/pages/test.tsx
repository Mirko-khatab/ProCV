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

  return <div></div>
}

export default test

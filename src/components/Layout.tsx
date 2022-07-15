import Head from 'next/head'
import React, { useContext } from 'react'
import Nav from './Nav'
import { UserContext } from '../../context/context'
type Type = React.FC<{
  children: any
}>
const Layout: Type = ({ children }) => {
  const { printed }: any = useContext(UserContext)
  return (
    <>
      <Head>
        <title>ProCV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${printed && 'hidden'}`}>
        <Nav />
      </div>
      <body>{children}</body>
    </>
  )
}

export default Layout

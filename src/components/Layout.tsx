import Head from 'next/head'
import React from 'react'


type Type = React.FC<{
  children: any
}>
const Layout: Type = ({ children }) => {
  return (
    <>
      <Head>
        <title>ProCV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <body>
     
        {children}
      </body>
    </>
  )
}

export default Layout

import Head from 'next/head';
import React from 'react'

type Type = React.FC<{
  children: any;
}>;
const Layout:Type = ({children}) => {
  return (
    <>
    <html dir='rtl'>
        <Head>
        <title>ProCV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     
      <body>
  
      {children}
      
      </body>
      


      

      </html>
    </>
  )
}

export default Layout

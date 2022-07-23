import Head from 'next/head'
import React, { useContext, useState } from 'react'
import Nav from './Nav'
import { UserContext } from '../../context/context'
import { LangContext } from '../../context/lang'
import Footer from './About'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Type = React.FC<{
  children: any
}>
const Layout: Type = ({ children }) => {
  const { printed }: any = useContext(UserContext)
  const { lang, setLang, dictionary }: any = useContext(LangContext)
  const [isOpen, setIsOpen] = useState<String>('')

  const currentLang = lang

  const router = useRouter()

  return (
    <>
      <Head>
        <title>ProCV</title>
      
        <link rel="shortcut icon" href="../../img/favicon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="y1pjBdqnY9TpiL9cPxYat9_3mmc-uehaOUd7bfI2XxY"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${printed && 'hidden'}`}>
        <Nav />
      </div>
      <body dir={currentLang === 'ar' || currentLang === 'ku' ? 'rtl' : 'ltr'}>
        {children}
        <div className={`${router.pathname === '/resumepage' && 'hidden'}`}>
          {' '}
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout

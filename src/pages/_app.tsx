import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '../components/Layout'
import UserProvider from '../../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserProvider>
     <Layout>
      <Component {...pageProps} />
      </Layout>
      </UserProvider>
    </>
  )
}

export default MyApp



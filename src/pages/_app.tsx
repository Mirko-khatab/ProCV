import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '../components/Layout'
import UserProvider from '../context/context'
import LangProvider from '../context/lang'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <LangProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LangProvider>
      </UserProvider>
    </>
  )
}

export default MyApp

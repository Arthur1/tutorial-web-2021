import React, { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import config from '../next.config'
import '../styles/app.scss'

const App: FC<AppProps> = props => {
  const { Component, pageProps } = props
  return (
    <Layout>
      <Head>
        <link rel="icon" href={`${config.basePath}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

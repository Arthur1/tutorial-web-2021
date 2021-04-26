import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/app.scss'

const App: FC<AppProps> = props => {
  const { Component, pageProps } = props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

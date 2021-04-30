import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1 } from '../components/snippets'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>Web講習会2021</title>
    </Head>
    <Headline1>Web講習会2021</Headline1>
    <p>Arthurが実施するWeb講習会2021に関する情報を掲載するWebサイトです。</p>
  </Container>
)

export default index

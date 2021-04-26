import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1 } from '../components/snippets'

const index = () => (
  <Container className="mt-4">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Headline1>Web講習会</Headline1>
    <p>Arthurが実施するWeb講習会2021に関する情報を掲載するWebサイトです。</p>
  </Container>
)

export default index

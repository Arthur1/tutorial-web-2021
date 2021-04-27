import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1, Headline2 } from '../../components/snippets'
// import LessonBox from '../../components/courses/LessonBox'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>Webセキュリティ攻撃・防御 | Web講習会2021</title>
    </Head>
    <Headline1>Webセキュリティ攻撃・防御</Headline1>
    <Headline2>お知らせ</Headline2>
    <ul>
      <li>Webサイトを公開しました</li>
    </ul>
    <Headline2>講習会</Headline2>
    <p>準備中です</p>
    <Headline2>シラバス</Headline2>
    <p>準備中です</p>
  </Container>
)

export default index

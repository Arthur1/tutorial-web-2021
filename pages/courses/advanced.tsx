import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1, Headline2 } from '../../components/snippets'
import LessonBox from '../../components/courses/LessonBox'
import LessonMaterialList, {
  LessonMovie,
  LessonSlide,
  LessonFile,
  LessonAppendix,
} from '../../components/courses/LessonMaterialList'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>ワールドワイドウェブ発展 | Web講習会2021</title>
    </Head>
    <Headline1>ワールドワイドウェブ発展</Headline1>
    <Headline2>お知らせ</Headline2>
    <ul>
      <li>第2回の資料を掲載しました</li>
    </ul>
    <Headline2>講習会</Headline2>
    <LessonBox id={3} title="TypeScript">
      <LessonMaterialList>
        <LessonMovie href="https://youtu.be/FSckCEGP2wY">
          YouTube Live 2021/08/22(日) 14:00-15:30
        </LessonMovie>
        <LessonSlide fileName="slide3.pdf">slide3.pdf</LessonSlide>
        <LessonFile fileName="code3.zip">code3.zip</LessonFile>
      </LessonMaterialList>
    </LessonBox>
    <LessonBox id={2} title="Node.js">
      <LessonMaterialList>
        <LessonMovie href="https://youtu.be/Yclk3qaG2ns">
          YouTube Live 2021/07/24(土) 14:00-15:30
        </LessonMovie>
        <LessonSlide fileName="slide2.pdf">slide2.pdf</LessonSlide>
        <LessonFile fileName="code2.zip">code2.zip</LessonFile>
        <LessonAppendix href="/appx/nodenv">Node.js環境構築</LessonAppendix>
      </LessonMaterialList>
    </LessonBox>
    <LessonBox id={1} title="Webの実装パターンの歴史">
      <LessonMaterialList>
        <LessonMovie href="https://youtu.be/wC4RRcOeC0o">
          YouTube Live 2021/07/17(土) 14:00-15:30
        </LessonMovie>
        <LessonSlide fileName="slide0.pdf">slide0.pdf</LessonSlide>
        <LessonSlide fileName="slide1.pdf">slide1.pdf</LessonSlide>
      </LessonMaterialList>
    </LessonBox>
    <Headline2>シラバス</Headline2>
    <ol>
      <li>
        Webの実装パターンの歴史
        <ul>
          <li>SST</li>
          <li>AJAX</li>
          <li>CSR (SPA)</li>
          <li>SSR</li>
          <li>SSG</li>
        </ul>
      </li>
      <li>
        Node.js
        <ul>
          <li>ES2015以降の文法</li>
          <li>Node.jsプログラミング</li>
          <li>モジュール</li>
          <li>npm</li>
        </ul>
      </li>
      <li>
        TypeScript
        <ul>
          <li>TypeScriptの意義と文法</li>
          <li>基本の型</li>
          <li>網羅チェック</li>
          <li>型定義ファイル</li>
        </ul>
      </li>
      <li>
        REST API
        <ul>
          <li>Web APIとは</li>
          <li>RESTfulとは</li>
          <li>冪等性と安全性</li>
        </ul>
      </li>
      <li>
        React(1)
        <ul>
          <li>クラスコンポーネント</li>
          <li>Stateのリフトアップ</li>
          <li>関数型コンポーネント</li>
        </ul>
      </li>
      <li>
        React(2)
        <ul>
          <li>React Hooksを用いた関数型コンポーネント</li>
        </ul>
      </li>
      <li>
        Next.js
        <ul>
          <li>Next.jsの意義や利用法</li>
          <li>SSGを用いたサイトの実装と公開</li>
        </ul>
      </li>
    </ol>
  </Container>
)

export default index

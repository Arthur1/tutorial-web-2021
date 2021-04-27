import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1, Headline2 } from '../../components/snippets'
// import LessonBox from '../../components/courses/LessonBox'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>ワールドワイドウェブ発展 | Web講習会2021</title>
    </Head>
    <Headline1>ワールドワイドウェブ発展</Headline1>
    <Headline2>お知らせ</Headline2>
    <ul>
      <li>Webサイトを公開しました</li>
    </ul>
    <Headline2>講習会</Headline2>
    <p>準備中です</p>
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

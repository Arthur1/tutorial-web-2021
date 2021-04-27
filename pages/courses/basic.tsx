import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1, Headline2 } from '../../components/snippets'
import LessonBox from '../../components/courses/LessonBox'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>ワールドワイドウェブ基礎 | Web講習会2021</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Headline1>ワールドワイドウェブ基礎</Headline1>
    <Headline2>お知らせ</Headline2>
    <ul>
      <li>Webサイトを公開しました</li>
    </ul>
    <Headline2>講習会</Headline2>
    <LessonBox id={1} title="WWW">
      <ul>
        <li>slide0.pdf</li>
        <li>slide1.pdf</li>
      </ul>
    </LessonBox>
    <Headline2>シラバス</Headline2>
    <ol>
      <li>
        WWW
        <ul>
          <li>WWWの成り立ち</li>
          <li>WWWの3要素</li>
          <li>URI</li>
        </ul>
      </li>
      <li>
        HTML
        <ul>
          <li>HTMLの役割と文法</li>
          <li>要素とタグ</li>
        </ul>
      </li>
      <li>
        CSS(1)
        <ul>
          <li>CSSの役割と文法</li>
          <li>基本のセレクタ</li>
          <li>スタイルの競合と継承</li>
          <li>テキストと背景の装飾</li>
          <li>開発者ツール</li>
        </ul>
      </li>
      <li>
        CSS(2)
        <ul>
          <li>CSSの外部ファイル化</li>
          <li>ボックス</li>
          <li>応用的なセレクタ</li>
          <li>レスポンシブデザイン</li>
          <li>CSSライブラリ</li>
        </ul>
      </li>
      <li>
        HTMLとCSS・HTTP
        <ul>
          <li>文書構造と装飾の分離</li>
          <li>CSSアーキテクチャ</li>
          <li>HTTPプロトコル</li>
          <li>リクエストとレスポンス</li>
        </ul>
      </li>
      <li>
        JavaScript
        <ul>
          <li>JavaScriptの役割と文法</li>
          <li>DOMの操作</li>
          <li>イベントハンドラ</li>
        </ul>
      </li>
      <li>
        Webサイトの公開
        <ul>
          <li>基本的なWebサーバの仕組み</li>
          <li>GitHub PagesによるWebサイトの公開</li>
        </ul>
      </li>
    </ol>
  </Container>
)

export default index

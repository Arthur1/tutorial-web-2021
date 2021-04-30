import React, { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import styles from '../styles/index.module.scss'

const index: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>Web講習会2021</title>
    </Head>
    <Jumbotron>
      <h1>Web講習会2021</h1>
      <p>
        Arthurが実施するWeb講習会2021に関する情報を掲載するWebサイトです。本コンテンツは主にTitech
        App Projectの新メンバー向けに公開しています。
      </p>
    </Jumbotron>
    <h2 className="text-primary mt-4">ワールドワイドウェブ基礎</h2>
    <p>
      WWWというプラットフォームについて理解した上で、HTML/CSS/JavaScriptを用いたシンプルな構成の静的Webサイトを製作し公開することを目標にしています。
    </p>
    <Link href="/courses/basic" passHref>
      <Button variant="light">
        <FaInfoCircle className={styles.ButtonIcon} />
        詳細
      </Button>
    </Link>
    <h2 className="text-primary mt-4">ワールドワイドウェブ発展</h2>
    <p>
      React/Next.js/TypeScriptを用いたモダンなフロントエンド開発をメインに、基礎では扱えなかった応用的な内容を扱います。
    </p>
    <Link href="/courses/advanced" passHref>
      <Button variant="light">
        <FaInfoCircle className={styles.ButtonIcon} />
        詳細
      </Button>
    </Link>
    <h2 className="text-primary mt-4">Webセキュリティ攻撃・防御</h2>
    <p>
      Webアプリケーションを安全に提供するためのセキュリティに関する知識を取り挙げます。また、CTF
      Web分野の演習も行います。
    </p>
    <Link href="/courses/security" passHref>
      <Button variant="light">
        <FaInfoCircle className={styles.ButtonIcon} />
        詳細
      </Button>
    </Link>
  </Container>
)

export default index

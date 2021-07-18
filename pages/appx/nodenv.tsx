import React, { FC } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Headline1, Headline2, Headline3 } from '../../components/snippets'

const nodenv: FC = () => (
  <Container className="mt-4">
    <Head>
      <title>Node.js環境構築 | Web講習会2021</title>
    </Head>
    <Headline1>Node.js環境構築</Headline1>
    <p>
      以降の講習会は、以下のツールを動かす環境があることが前提になります。好きな方法でこれらを導入してください。
    </p>
    <ul>
      <li>Node.js (JavaScriptのサーバサイド実行環境) v16.4.2</li>
      <li>Yarn (パッケージ管理ツール)</li>
    </ul>
    <p>
      本ページでは、複数のプロジェクトで異なるバージョンのNode.jsを利用したいときに便利な
      <b>nodenv</b>
      の導入について説明します。Dockerなどの仮想環境を導入する必要がなく、カレントディレクトリによって自動でバージョンを切り替えられます。
    </p>
    <Headline2>anyenvの導入</Headline2>
    <p>anyenvは、数ある***envというツールをかんたんに導入できるものです。</p>
    <p>Homebrewを導入している人は、以下のコマンドを実行するだけです。</p>
    <pre>
      <code>
        $ brew install anyenv
        <br />$ anyenv install --init
        <br />$ echo &apos;eval &quot;$(anyenv init -)&quot;&apos; &gt;&gt; ~/.zshrc #
        bashの人は~/.bashrc
        <br />$ exec $SHELL -l
        <br />$ anyenv --version
        <br />
        anyenv 1.1.3
      </code>
    </pre>
    <p>Homebrewを使っていない人は、GitHubからコードをダウンロードして導入します。</p>
    <pre>
      <code>
        $ git clone https://github.com/anyenv/anyenv ~/.anyenv
        <br />$ echo &apos;export PATH=&quot;$HOME/.anyenv/bin:$PATH&quot;&apos; &gt;&gt;
        ~/.zprofile # bashの人は~/.bash_profile
        <br />$ exec $SHELL -l
        <br />$ anyenv install --init
        <br />$ echo &apos;eval &quot;$(anyenv init -)&quot;&apos; &gt;&gt; ~/.zshrc #
        bashの人は~/.bashrc
        <br />$ exec $SHELL -l
        <br />$ anyenv --version
        <br />
        anyenv 1.1.3
      </code>
    </pre>
    <Headline2>anyenvのプラグイン導入</Headline2>
    <p>
      anyenv-updateというプラグインをいれると、<code>anyenv update</code>
      で***envを一括アップデートできて便利です。
    </p>
    <pre>
      <code>
        $ mkdir -p $(anyenv root)/plugins
        <br />
        $ git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
        <br />$ exec $SHELL -l
      </code>
    </pre>
    <Headline2>nodenvの導入</Headline2>
    <pre>
      <code>
        $ anyenv install nodenv
        <br />
        $ exec $SHELL -l
        <br />
        $ nodenv --version
        <br />
        nodenv 1.4.0+3.631d0b6
      </code>
    </pre>
    <Headline2>nodenvのプラグイン導入</Headline2>
    <p>
      nodenv-yarn-installというプラグインをいれると、<code>nodenv install</code>
      時にYarnも導入することができます。
    </p>
    <pre>
      <code>
        $ mkdir -p &quot;$(nodenv root)/plugins&quot;
        <br />
        $ git clone https://github.com/pine/nodenv-yarn-install.git &quot;$(nodenv
        root)/plugins/nodenv-yarn-install&quot;
        <br />$ exec $SHELL -l
      </code>
    </pre>
    <Headline2>nodenvの使い方</Headline2>
    <Headline3>指定したバージョンのNode.jsをインストール</Headline3>
    <pre>
      <code>$ nodenv install 16.4.2</code>
    </pre>
    <p>インストールしただけでは使えないことに注意</p>
    <Headline3>インストール済のバージョンを確認</Headline3>
    <pre>
      <code>
        $ nodenv versions
        <br /> 16.4.2
      </code>
    </pre>
    <Headline3>使用するnodeのバージョンを指定</Headline3>
    <pre>
      <code>
        # グローバルで使うバージョンを指定
        <br />
        $ nodenv global 16.4.2
        <br />
        <br />
        # カレントディレクトリ以下で使うバージョンを指定
        <br />$ nodenv local 16.4.2
        <br />
        <br />$ node --version
        <br />
        v16.4.2
      </code>
    </pre>
    <p>
      localの場合は、生成された<code>.node-version</code>
      ファイルをgitの管理下に含めて共有することで、他のnodenvユーザにも同じバージョンを使ってもらうことができます。
    </p>
  </Container>
)

export default nodenv

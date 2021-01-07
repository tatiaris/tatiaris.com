import Head from 'next/head'
import { Page } from '@geist-ui/react'
import GeistNavbar from "../components/GeistNavbar"

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Rishabh Tatia | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | Portfolio`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com" />
        <meta property="og:description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
        <meta property="og:type" content="profile" />
        <meta http-equiv="content-language" content="en" />
      </Head>
      <GeistNavbar theme="light" />
    </Page>
  )
}

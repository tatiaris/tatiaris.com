import Head from 'next/head'
import { Page } from '@geist-ui/react'
import GeistNavbar from "../components/GeistNavbar"

export default function Home() {
  const avatarUrl = '/img/avatar.png'
  return (
    <Page>
      <Head>
        <title>Rishabh Tatia | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeistNavbar theme="light"/>
    </Page>
  )
}

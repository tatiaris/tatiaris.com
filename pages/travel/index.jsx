import { Image, Page, Text } from "@geist-ui/react";
import Head from "next/head";
import Copyright from "../../components/Copyright";
import Link from "next/link";

export const Travel = () => {
  return (
    <Page className="blog-page">
      <Head>
        <title>Travel | Rishabh Tatia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Travel - Fly, Drive, Hike, Repeat" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content="Travel - Fly, Drive, Hike, Repeat" />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/travel" />
        <meta property="og:description" content="Travel - Fly, Drive, Hike, Repeat" />
        <meta property="og:type" content="page" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <div className="profile-intro-container">
        <div className='left-col'>
          <img width={150} src="/travel/earth.svg" alt="" />
        </div>
        <div>
          <h2>Fly, Drive, Hike, Repeat</h2>
          <div>
            <Text style={{ fontSize: '22px', color: '#111' }}>
              One of my goals in life is to see as much of this world as I can and
              I've been fortunate enough to travel to a few places and capture a fraction of their beauty:
            </Text>
            <br />
            <ul>
              <li><Link href='/travel/zion'>Zion, Utah, USA</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <Copyright theme={'light'} />
    </Page>
  );
}

export default Travel;
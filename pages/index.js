import Head from 'next/head';
import { Page } from '@geist-ui/react';
import Copyright from '../components/Copyright';
import Homepage from '../components/Homepage';

export default function Home() {
  return (
    <>
      <Page style={{ maxWidth: '1000px' }}>
        <Head>
          <title>Rishabh Tatia</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
          <meta name="description" content="Rishabh Tatia's personal website." />
          <meta name="thumbnail" content="https://tatiaris.com/img/thumbnail.png" />
          <meta name="author" content="Rishabh Tatia" />
          <meta property="og:title" content={`Rishabh Tatia`} />
          <meta property="og:site_name" content="Rishabh Tatia" />
          <meta property="og:url" content="tatiaris.com" />
          <meta property="og:description" content="Rishabh Tatia's personal website." />
          <meta property="og:image" content="https://tatiaris.com/img/thumbnail.png" />
          <meta property="og:type" content="profile" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@tatia_ris" />
          <meta name="twitter:title" content={`Rishabh Tatia`} />
          <meta name="twitter:description" content="Rishabh Tatia's personal website." />
          <meta name="twitter:image" content="https://tatiaris.com/img/thumbnail.png" />
          <meta httpEquiv="content-language" content="en" />
        </Head>
        <Homepage />
        <br />
        <Copyright theme={'light'} />
      </Page>
    </>
  );
}

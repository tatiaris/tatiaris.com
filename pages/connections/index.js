import { useState } from 'react';
import Head from 'next/head';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, useToasts } from '@geist-ui/react';

const board = {
  easy: {
    title: "can do no harm",
    words: ["Henry", "Jennifer", "Long", "Ethan"]
  },
  medium: {
    title: "one piece nerds",
    words: ["Kim", "Aivan", "Irvin", "Michael"]
  },
  hard: {
    title: "don't go hard at smash",
    words: ["David L", "Will", "Jonathan", "Steven"]
  },
  tricky: {
    title: "not regulars but will play in tournaments",
    words: ["Christine", "Brendan", "Dom", "Trisna"]
  }
}

const Connections = () => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });
  const [solvedList, setSolvedList] = useState([]);
  const [unsolvedList, setUnsolvedList] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);

  return (
    <Page id="tutoring-page-container">
      <Head>
        <title>Rishabh Tatia | Connections</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Connections" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | Connections`} />
        <meta property="og:site_name" content="Rishabh Tatia | Connections" />
        <meta property="og:url" content="tatiaris.com/connections" />
        <meta property="og:description" content="Connections" />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>connections</Breadcrumbs.Item>
      </Breadcrumbs>
      <div id='connections-container'>
      </div>
      <Copyright theme="light" />
    </Page>
  );
};

export default Connections;

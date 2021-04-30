import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Page, Text, Image } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Copyright from '../components/Copyright';

export default function Home() {
  const [theme, setTheme] = useState('default');
  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    if (theme != 'default') {
      document.body.className = `body-${theme}`;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof localStorage.getItem('theme') != 'undefined' && (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark')) setTheme(localStorage.getItem('theme'));
  }, []);

  return (
    <>
      <button onClick={toggleTheme} className={`mode-toggle-img`}>
        <Image className={`bg-img-${theme}`} src="/img/bg-top-right.png" alt="theme-toggle-img" />
      </button>
      <Page>
        <Head>
          <title>Rishabh Tatia | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
          <meta name="description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
          <meta name="thumbnail" content="https://tatiaris.com/img/thumbnail.png" />
          <meta name="author" content="Rishabh Tatia" />
          <meta property="og:title" content={`Rishabh Tatia | Portfolio`} />
          <meta property="og:site_name" content="Rishabh Tatia" />
          <meta property="og:url" content="tatiaris.com" />
          <meta property="og:description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
          <meta property="og:image" content="https://tatiaris.com/img/thumbnail.png" />
          <meta property="og:type" content="profile" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@Rishabh77022392" />
          <meta name="twitter:title" content={`Rishabh Tatia | Portfolio`} />
          <meta name="twitter:description" content="Rishabh Tatia's personal website. Welcome to my portfolio page, here you can get to know me and my projects." />
          <meta name="twitter:image" content="https://tatiaris.com/img/thumbnail.png" />
          <meta httpEquiv="content-language" content="en" />
        </Head>
        <GeistNavbar theme={theme} />
        <Copyright theme={theme} />
      </Page>
    </>
  );
}

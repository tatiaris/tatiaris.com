import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row, Button, Spacer } from '@geist-ui/react';
import { ArrowRight } from '@geist-ui/react-icons';

const Project = () => {
  const [wikiFrom, setWikiFrom] = useState('https://en.wikipedia.org/wiki/Apple');
  const [wikiTo, setWikiTo] = useState('https://en.wikipedia.org/wiki/Dinosaur');

  const findPath = (fromLink, toLink) => {
    console.log('finding path from', fromLink, 'to', toLink);
  };

  const startFindingPath = () => findPath(wikiFrom, wikiTo);

  return (
    <Page id="project-container">
      <Head>
        <title>Wiki Run</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="From one wikipedia page to another" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Wiki Run`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/p/wiki_run" />
        <meta property="og:description" content="From one wikipedia page to another" />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>wiki_run</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>WIKI RUN</Text>
      <Row justify="space-between" style={{ flexWrap: 'wrap' }}>
        <div>
          <Input onChange={(e) => setWikiFrom(e.target.value)} label="From Wikipedia" initialValue={wikiFrom} className="wiki-input" placeholder="https://en.wikipedia.org/wiki/Apple" />
        </div>
        <div>
          <Input onChange={(e) => setWikiTo(e.target.value)} label="To Wikipedia" initialValue={wikiTo} className="wiki-input" placeholder="https://en.wikipedia.org/wiki/Dinosaur" />
        </div>
      </Row>
      <Spacer y={1} />
      <Button onClick={startFindingPath} auto>
        <span style={{ marginRight: '1rem' }}>Find Path </span>
        <ArrowRight size="25" />
      </Button>
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;

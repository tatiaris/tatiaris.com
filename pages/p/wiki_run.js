import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row } from '@geist-ui/react';

const Project = () => {
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
        <Breadcrumbs.Item>about_you</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>WIKI RUN</Text>
      <Row justify="space-between" style={{ flexWrap: 'wrap' }}>
        <div>
          <Input label="From Wikipedia" className="wiki-input" placeholder="https://en.wikipedia.org/wiki/Apple" />
        </div>
        <div>
          <Input label="To Wikipedia" className="wiki-input" placeholder="https://en.wikipedia.org/wiki/Dinosaur" />
        </div>
      </Row>
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;

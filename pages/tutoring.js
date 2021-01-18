import React from 'react';
import Head from 'next/head';
import { Page, Breadcrumbs, Text } from '@geist-ui/react';

const Project = () => {
  return (
    <Page id="project-container">
      <Head>
        <title>Rishabh Tatia | CS Tutoring</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Computer Science tutoring services offered by Rishabh Tatia." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | CS Tutoring`} />
        <meta property="og:site_name" content="Rishabh Tatia Tutoring" />
        <meta property="og:url" content="tatiaris.com/tutoring" />
        <meta property="og:description" content="Computer Science tutoring services offered by Rishabh Tatia." />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>tutoring</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>TUTORING SERVICES</Text>
    </Page>
  );
};

export default Project;

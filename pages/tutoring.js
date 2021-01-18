import React from 'react';
import Head from 'next/head';
import { Page, Breadcrumbs, Text, Image } from '@geist-ui/react';

const Tutoring = () => {
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
      <Text h3>COMPUTER SCIENCE TUTORING</Text>
      <br />
      <br />
      <Image width={600} height={300} src="/tutoring/programmer_1.svg" alt="programmer_1" />
      <br />
      <br />
      <Text h4>WHAT?</Text>
      <Text style={{ marginTop: 0 }}>
        <b>Computer science</b> is the study of computers and computing as well as their <b>theoretical</b> and <b>practical</b> applications. The theory of computer science includes topics such as
        data structures, algorithms, computer and network design, data science, and more. The applications of computer science include machine learning, software (web/app/game/system) development,
        cyber security, robotics, and{' '}
        <a href="http://wpplayers.com/computer-science-and-its-applications-in-the-present-world/" className="color-link blue-bg" target="_blank" rel="noreferrer">
          more
        </a>{' '}
        .
      </Text>
      <Text h4>WHY?</Text>
      <Text style={{ marginTop: 0 }}>
        Good computer scientists are in <b>high demand</b> today, and are expected to stay so for a very long time. Even if one does not choose to work a computer science job, programming is an{' '}
        <b>extremely beneficial skill</b> which can be applied to <b>almost any field</b> and one&apos;s personal life as well. If neither of the above statements interest you, you can still{' '}
        <b>have fun</b> solving challenging and interesting{' '}
        <a href="https://open.kattis.com/" className="color-link red-bg" target="_blank" rel="noreferrer">
          logic puzzles
        </a>{' '}
        through programming.
      </Text>
      <Text h4>WHO?</Text>
      <Text style={{ marginTop: 0 }}>
        Me! My name is{' '}
        <a href="https://tatiaris.com/" className="color-link green-bg" target="_blank" rel="noreferrer">
          Rishabh Tatia
        </a>{' '}
        and I&apos;m an Applied Mathematics and Computer Science student at{' '}
        <a href="https://tamu.edu/" className="color-link maroon-bg" target="_blank" rel="noreferrer">
          Texas A&M University
        </a>
        .
      </Text>
    </Page>
  );
};

export default Tutoring;

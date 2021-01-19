import React from 'react';
import Head from 'next/head';
import { Page, Breadcrumbs, Text, Image, Divider, Row, Col } from '@geist-ui/react';

const Tutoring = () => {
  return (
    <Page id="project-container">
      <Head>
        <title>Rishabh Tatia | Computer Science Tutoring</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Computer Science tutoring services offered by Rishabh Tatia." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Rishabh Tatia | Computer Science Tutoring`} />
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
      <Text h3>RISHABH&apos;S COMPUTER SCIENCE TUTORING</Text>
      <br />
      <br />
      <Image width={600} height={300} src="/tutoring/programmer_1.svg" alt="programmer_1" />
      <br />
      <br />
      <Text h4>WHAT is Computer Science?</Text>
      <Text style={{ marginTop: 0 }}>
        <b>Computer science</b> is the study of computers and computing as well as their <b>theoretical</b> and <b>practical</b> applications. The theory of computer science includes topics such as
        data structures, algorithms, computer and network design, data science, and more. The applications of computer science include machine learning, software (web/app/game/system) development,
        cyber security, robotics, and{' '}
        <a href="http://wpplayers.com/computer-science-and-its-applications-in-the-present-world/" className="color-link blue-bg" target="_blank" rel="noreferrer">
          more
        </a>{' '}
        .
      </Text>
      <Text h4>WHY should you learn it?</Text>
      <Text style={{ marginTop: 0 }}>
        Good computer scientists are in <b>high demand</b> today, and are expected to stay so for a very long time. Even if you do not choose to work a computer science job, programming is an{' '}
        <b>extremely beneficial skill</b> which can be applied to <b>almost any field</b> and your personal life as well. If neither of the above statements interest you, you can simply{' '}
        <b>have fun</b> solving challenging and interesting{' '}
        <a href="https://open.kattis.com/" className="color-link red-bg" target="_blank" rel="noreferrer">
          logic puzzles
        </a>{' '}
        through programming.
      </Text>
      <Text h4>WHO can help you learn?</Text>
      <Text style={{ marginTop: 0 }}>
        Me! My name is{' '}
        <a href="https://tatiaris.com/" className="color-link green-bg" target="_blank" rel="noreferrer">
          Rishabh Tatia
        </a>{' '}
        and I&apos;m an Applied Mathematics and Computer Science student at{' '}
        <a href="https://tamu.edu/" className="color-link maroon-bg" target="_blank" rel="noreferrer">
          Texas A&M University
        </a>
        . I have <b>6 years of experience</b> programming and developing various softwares and am <b>passionate about teaching</b> this useful skill to anyone willing to learn.
      </Text>
      <Text h4>HOW will you learn?</Text>
      <Text style={{ marginTop: 0 }}>
        We will be using{' '}
        <a href="https://zoom.us/download/" className="color-link zoom-bg" target="_blank" rel="noreferrer">
          Zoom
        </a>{' '}
        to conduct <b>one-on-one</b> classes at predetermined times of the week based on availability.
      </Text>
      <Divider y={5}>CLASSES</Divider>
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container">
          <Image width={400} height={200} src="/tutoring/intro_programmer.svg" alt="intro_programmer" />
        </div>
        <div className="class-details">
          <Text h4>
            Intro to Programming | <span style={{ color: 'hotpink' }}>$30/Hr</span>
          </Text>
          <Text>
            Learn what programming is, how it is used in our world today, and the basics of any{' '}
            <a href="https://www.geeksforgeeks.org/difference-between-high-level-and-low-level-languages/" className="color-link green-bg" target="_blank" rel="noreferrer">
              high-level programming language
            </a>{' '}
            of your choice.
          </Text>
          <span className="goals">Goals:</span>
          <ul>
            <li>
              Understand <b>fundamentals of programming</b> such as variables, conditions, loops, and methods.
            </li>
            <li>Understand important principles of software development.</li>
            <li>
              Have the ability to use learned knowledge to <b>solve logic problems</b>.
            </li>
          </ul>
        </div>
      </Row>
      <Divider />
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container order-one">
          <Image width={400} height={200} src="/tutoring/ap_cs_prep.svg" alt="ap_cs_prep" />
        </div>
        <div className="class-details">
          <Text h4>
            AP Computer Science Prep | <span style={{ color: 'hotpink' }}>$30/Hr</span>
          </Text>
          <Text>
            Master the content that appears on the <b>AP Computer Science A</b> exam and get a 5 on it!
          </Text>
          <span className="goals">Goals:</span>
          <ul>
            <li>
              Learn how{' '}
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" className="color-link orange-bg" target="_blank" rel="noreferrer">
                Java
              </a>{' '}
              works along with the concept and principles of <b>object oriented programming</b>.
            </li>
            <li>
              Learn how to <b>debug</b>, fix errors, document code, and <b>explain</b> how a program works.
            </li>
            <li>
              Have the ability to design programs, <b>develop algorithms</b>, and implement them.
            </li>
          </ul>
        </div>
      </Row>
      <Divider />
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container">
          <Image width={400} height={200} src="/tutoring/web_dev_1.svg" alt="intro_programmer" />
        </div>
        <div style={{ width: '550px' }}>
          <Text h4>
            Web Development | <span style={{ color: 'hotpink' }}>$40/Hr</span>
          </Text>
          <Text>Learn how to design, build, and publish beautiful, responsive websites using HTML, CSS, and Javascript.</Text>
        </div>
      </Row>
      <Divider />
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container order-one">
          <Image width={400} height={200} src="/tutoring/problem_solving_2.svg" alt="problem_solving_2" />
        </div>
        <div style={{ width: '550px' }}>
          <Text h4>
            Problem Solving | <span style={{ color: 'hotpink' }}>$40/Hr</span>
          </Text>
          <Text></Text>
        </div>
      </Row>
      <Divider y={5} />
      <Text small style={{ float: 'right' }} type="secondary" className={`copyright-statement light`}>
        Copyright © 2020 - 2021 Rishabh Tatia
      </Text>
    </Page>
  );
};

export default Tutoring;

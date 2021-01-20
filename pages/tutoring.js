import React from 'react';
import Head from 'next/head';
import Copyright from '../components/Copyright';
import { Page, Breadcrumbs, Text, Image, Divider, Row, Tooltip, Link, useToasts } from '@geist-ui/react';
import { Github, FileText, Linkedin, Mail, Globe } from '@geist-ui/react-icons';

const Tutoring = () => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });
  return (
    <Page id="tutoring-page-container">
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
      <Image width={700} height={350} src="/tutoring/programmer_1.svg" alt="programmer_1" />
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
      <Divider align="start" y={5}>
        CLASSES
      </Divider>
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container">
          <Image src="/tutoring/intro_programmer.svg" alt="intro_programmer" />
        </div>
        <div className="class-details">
          <Text h4>
            Intro to Programming | <span style={{ color: 'hotpink' }}>$30/Hr</span> | <span style={{ color: 'darkorange' }}>Easy</span>
          </Text>
          <Text>
            Learn about programming, how it is used today, and the basics of any{' '}
            <a href="https://www.geeksforgeeks.org/difference-between-high-level-and-low-level-languages/" className="color-link green-bg" target="_blank" rel="noreferrer">
              high-level programming language
            </a>{' '}
            of your choice.
          </Text>
          <span className="goals">Objectives:</span>
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
          <Image src="/tutoring/ap_cs_prep.svg" alt="ap_cs_prep" />
        </div>
        <div className="class-details">
          <Text h4>
            AP Computer Science Prep | <span style={{ color: 'hotpink' }}>$30/Hr</span> | <span style={{ color: 'darkorange' }}>Medium</span>
          </Text>
          <Text>
            Master the content that appears on the <b>AP Computer Science A</b> exam and get a 5 on it!
          </Text>
          <span className="goals">Objectives:</span>
          <ul>
            <li>
              Understand how{' '}
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" className="color-link orange-bg" target="_blank" rel="noreferrer">
                Java
              </a>{' '}
              works along with the concept and principles of <b>object oriented programming</b>.
            </li>
            <li>
              Understand how to <b>debug</b>, fix errors, document code, and <b>explain</b> how a program works.
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
          <Image src="/tutoring/web_dev_1.svg" alt="intro_programmer" />
        </div>
        <div className="class-details">
          <Text h4>
            Web Development | <span style={{ color: 'hotpink' }}>$40/Hr</span> | <span style={{ color: 'darkorange' }}>Medium</span>
          </Text>
          <Text>
            Design, build, and publish beautiful, <b>responsive websites</b> using HTML, CSS, and Javascript.
          </Text>
          <span className="goals">Objectives:</span>
          <ul>
            <li>
              Understand how to use HTML, CSS, and Javascript to develop <b>static and dynamic webpages</b>.
            </li>
            <li>
              Know about the different <b>libraries and frameworks</b> popular across the internet.
            </li>
            <li>
              Have the ability to use the acquired knowledge to develop a <b>web-app from scratch</b>.
            </li>
          </ul>
        </div>
      </Row>
      <Divider />
      <Row className="class-info-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="class-image-container order-one">
          <Image src="/tutoring/problem_solving_2.svg" alt="problem_solving_2" />
        </div>
        <div className="class-details">
          <Text h4>
            Problem Solving | <span style={{ color: 'hotpink' }}>$40/Hr</span> | <span style={{ color: 'darkorange' }}>Hard</span>
          </Text>
          <Text>
            Use advanced <b>programming logic</b> to solve complex and challenging coding problems.
          </Text>
          <span className="goals">Objectives:</span>
          <ul>
            <li>
              Learn what different <b>data structures and algorithms</b> are and when to use them.
            </li>
            <li>
              Learn about <b>Big O Notation</b> and use it to analyze algorithms and their time complexity.
            </li>
            <li>
              Develop <b>critical thinking</b> skills to understand, analyze, and solve coding problems programatically.
            </li>
          </ul>
        </div>
      </Row>
      <Divider align="start" y={5} style={{ marginBottom: 'calc(15.25pt + 1px * 0)' }}>
        GET IN TOUCH
      </Divider>
      <Row style={{ flexWrap: 'wrap' }} className="ligt">
        <Link className="misc-link" target="_blank" rel="noreferrer" href="mailto:tatiaris2001@gmail.com?Subject=Hello!" block>
          <Mail />
          <span style={{ marginLeft: '5px' }}>tatiaris2001@gmail.com</span>
        </Link>
        <Link className="misc-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tatiaris/" block>
          <Linkedin />
          <span style={{ marginLeft: '5px' }}>Linkedin</span>
        </Link>
        <Link className="misc-link" target="_blank" rel="noreferrer" href="https://github.com/tatiaris" block>
          <Github />
          <span style={{ marginLeft: '5px' }}>Github</span>
        </Link>
        <Link className="misc-link" href="/" block>
          <Globe />
          <span style={{ marginLeft: '5px' }}>Portfolio</span>
        </Link>
        <Link download onClick={(e) => launchToast('Downloading Resume PDF...')} className="misc-link" href="/docs/RISHABH_TATIA_RESUME_12_20_v1.pdf" block>
          <FileText />
          <span style={{ marginLeft: '5px' }}>Resume</span>
        </Link>
      </Row>
      <Copyright theme="light" />
    </Page>
  );
};

export default Tutoring;

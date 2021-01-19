import React from 'react';
import { Text, User, Divider, Row, Tag, Spacer, Col, Badge, Link, useToasts, Tooltip } from '@geist-ui/react';
import { Github, FileText, Instagram, Twitter, Linkedin, Mail } from '@geist-ui/react-icons';

/**
 * Homepage component
 */
export const Homepage = (props) => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });

  return (
    <>
      <div className="content-wrapper">
        <Row style={{ alignItems: 'center', flexWrap: 'wrap', marginTop: '1em' }}>
          <Col style={{ width: 'max-content', marginTop: '1em', marginRight: '1em' }}>
            <User src="img/avatar.png" altText="user-img" name="Rishabh Tatia" className={`user-tag-${props.theme}`} style={{ padding: '0' }}>
              Full Stack Developer
            </User>
          </Col>
          <Col style={{ width: 'max-content', marginTop: '1em' }}>
            <Row>
              <Badge type="secondary" className={`badge-link ${props.theme}`}>
                <a href="https://intuit.com" target="_blank" rel="noreferrer">
                  @INTUIT
                </a>
              </Badge>
              <Spacer x={0.5} />
              <Badge type="secondary" className={`badge-link ${props.theme}`}>
                <a href="https://acelab.tamu.edu" target="_blank" rel="noreferrer">
                  @ACELAB
                </a>
              </Badge>
              <Spacer x={0.5} />
              <Badge type="secondary" className={`badge-link ${props.theme}`}>
                <a href="https://tamudatathon.com" target="_blank" rel="noreferrer">
                  @TAMU_DATATHON
                </a>
              </Badge>
            </Row>
          </Col>
        </Row>
        <br />
        <Divider align="start">My Life</Divider>
        <Text>
          <span style={{ fontSize: '1.2em' }}>Hello,</span>
          <br />
          My name is <b>Rishabh Tatia</b>. I am a Junior at{' '}
          <a href="https://tamu.edu" className={`about-link tamu ${props.theme}`} target="_blank" rel="noreferrer">
            Texas A&M University
          </a>{' '}
          studying Mathematics and Computer Science. I started programming as a freshman in high school when I wanted to develop games, automate processes, and create helpful applications for the
          public.
        </Text>
        <ul>
          <li>
            I was born on January 3rd 2001 in{' '}
            <a
              href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh,+India/@28.7853139,59.1335284,3.83z/data=!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2195191!4d78.1842041"
              className={`about-link city ${props.theme}`}
              target="_blank"
              rel="noreferrer">
              Gwalior, India
            </a>
            .
          </li>
          <li>I attended a boarding school for 4 years of my life, where I discovered my passion for sports and science.</li>
          <li>I moved to the U.S. in 2013, and attended high school in Chicago and Houston.</li>
          <li>I love playing sports and have played Table Tennis, Soccer, and Racquetball competitively.</li>
          <li>
            I enjoy participating in hackathons and am currently a developer and organizer for{' '}
            <a href="https://tamudatathon.com" className={`about-link datathon ${props.theme}`} target="_blank" rel="noreferrer">
              TAMU Datathon
            </a>
            .
          </li>
          <li>
            I am currently a web developer at{' '}
            <a href="https://acelab.tamu.edu" className={`about-link tamu ${props.theme}`} target="_blank" rel="noreferrer">
              Acelab
            </a>{' '}
            and will be interning at{' '}
            <a href="https://intuit.com" className={`about-link intuit ${props.theme}`} target="_blank" rel="noreferrer">
              Intuit
            </a>{' '}
            over Summer 2021.
          </li>
          <li>I like listening to Alternative, Pop, EDM, Hip-hop and Rock music.</li>
          <li>
            I am passionate about teaching and{' '}
            <a href="/tutoring" className={`about-link tutoring ${props.theme}`}>
              privately tutor
            </a>{' '}
            people in computer science and it&apos;s applications.
          </li>
          <li>My life long goal is to travel and document as many places around the world as I can.</li>
        </ul>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          My Hobbies & Interests
        </Divider>
        <Row style={{ flexWrap: 'wrap' }}>
          <Tag className={`hobby ${props.theme}`}>Racquetball</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Longboarding</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Ping Pong</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Basketball</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Pool</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Video Games</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Board Games</Tag>
          <Spacer x={0.5} />
          <Tag className={`hobby ${props.theme}`}>Speed Cubing</Tag>
        </Row>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          My Links
        </Divider>
        <Row style={{ flexWrap: 'wrap' }} className={`${props.theme}`}>
          <Tooltip text={'Github'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://github.com/tatiaris" block>
              <Github />
            </Link>
          </Tooltip>
          <Tooltip text={'Linkedin'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tatiaris/" block>
              <Linkedin />
            </Link>
          </Tooltip>
          <Tooltip text={'Instagram'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/tat.ris/" block>
              <Instagram />
            </Link>
          </Tooltip>
          <Tooltip text={'Twitter'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://twitter.com/Rishabh77022392" block>
              <Twitter />
            </Link>
          </Tooltip>
          <Tooltip text={'E-mail'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="mailto:tatiaris2001@gmail.com?Subject=Hello!" block>
              <Mail />
            </Link>
          </Tooltip>
          <Link download onClick={(e) => launchToast('Downloading Resume PDF...')} className="misc-link" href="/docs/RISHABH_TATIA_RESUME_12_20_v1.pdf" block>
            <FileText />
            <span style={{ marginLeft: '5px' }}>Resume</span>
          </Link>
        </Row>
      </div>
    </>
  );
};

export default Homepage;

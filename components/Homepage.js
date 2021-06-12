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
            <User src="img/avatar.png" altText="user-img" name="Rishabh Tatia" className="user-tag" style={{ padding: '0' }}>
              Developer
            </User>
          </Col>
          <Col style={{ width: 'max-content', marginTop: '1em' }}>
            <Row>
              <Badge type="secondary" className="badge-link">
                <a href="https://intuit.com" target="_blank" rel="noreferrer">
                  @INTUIT
                </a>
              </Badge>
              <Spacer x={0.5} />
              <Badge type="secondary" className="badge-link">
                <a href="https://tamudatathon.com" target="_blank" rel="noreferrer">
                  @TAMU_DATATHON
                </a>
              </Badge>
              <Spacer x={0.5} />
              <Badge type="secondary" className="badge-link">
                <a href="https://acelab.tamu.edu" target="_blank" rel="noreferrer">
                  @ACELAB
                </a>
              </Badge>
            </Row>
          </Col>
        </Row>
        <br />
        <Divider align="start">Experience</Divider>
        <Text>
          <span style={{ fontSize: '1.2em' }}>Hello,</span>
          <br />
          My name is <b>Rishabh Tatia</b>. I am a senior at{' '}
          <a href="https://tamu.edu" className={`about-link tamu`} target="_blank" rel="noreferrer">
            Texas A&M University
          </a>{' '}
          studying Mathematics and Computer Science. I started programming as a freshman in high school when I wanted to develop games, automate processes, and create helpful applications for the
          public.
        </Text>
        <br />
        <div className="exp-section" id="intuit-section">
          <b>@INTUIT</b> | Software Engineering Intern
          <ul>
            <li>
              Worked on a large scaling backend to power the Finish and File section for{' '}
              <Link target="_blank" rel="noreferrer" href="https://turbotax.intuit.com">
                TurboTax
              </Link>{' '}
              using Spring Boot and Java.
            </li>
            <li>Developed and extended libraries to improve server side rendering functionality for TurboTax Online</li>
          </ul>
        </div>
        <br />
        <div className="exp-section" id="td-section">
          <b>@TAMU DATATHON</b> | Software Developer
          <ul className={props.theme}>
            <li>
              Developed{' '}
              <Link target="_blank" rel="noreferrer" href="https://github.com/tamu-datathon-org/mercury">
                Mercury
              </Link>
              , a mailing web application integrated with Mailgun to edit, view, and send custom HTML templated emails.
            </li>
            <li>
              Created{' '}
              <Link target="_blank" rel="noreferrer" href="https://github.com/tamu-datathon-org/portal">
                Portal
              </Link>
              , an event showcase web application where events are stored as markdown files for ease of information update.
            </li>
            <li>
              Contributed to the organization&apos;s landing page and several other open-source projects including{' '}
              <Link target="_blank" rel="noreferrer" href="https://github.com/tamu-datathon-org/gatekeeper">
                Gatekeeper
              </Link>{' '}
              and{' '}
              <Link target="_blank" rel="noreferrer" href="https://github.com/tamu-datathon-org/r2d2">
                R2D2
              </Link>
              .
            </li>
          </ul>
        </div>
        <br />
        <div className="exp-section" id="acelab-section">
          <b>@ACELAB</b> | Full Stack Developer
          <ul>
            <li>
              Collaborated with a doctoral student to develop{' '}
              <Link target="_blank" rel="noreferrer" href="https://github.com/tatiaris/wieat">
                WIEAT
              </Link>
              , a web-based data entry, visualization, and analysis application.
            </li>
            <li>
              Redesigned, updated, and maintained the official{' '}
              <Link target="_blank" rel="noreferrer" href="https://acelab.tamu.edu">
                acelab
              </Link>{' '}
              website which serves over 12000 users every year.
            </li>
          </ul>
        </div>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          Hobbies & Interests
        </Divider>
        <Row style={{ flexWrap: 'wrap' }}>
          <Tag className="hobby">Racquetball</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Longboarding</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Ping Pong</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Basketball</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Pool</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Video Games</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Board Games</Tag>
          <Spacer x={0.5} />
          <Tag className="hobby">Cubing</Tag>
        </Row>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          Connect
        </Divider>
        <Row style={{ flexWrap: 'wrap' }}>
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
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://twitter.com/tatia_ris" block>
              <Twitter />
            </Link>
          </Tooltip>
          <Tooltip text={'E-mail'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="mailto:tatiaris2001@gmail.com?Subject=Hello!" block>
              <Mail />
            </Link>
          </Tooltip>
          <Link download onClick={(e) => launchToast('Downloading Resume PDF...')} className="misc-link" href="/docs/Rishabh-Tatia-Resume-6-21.pdf" block>
            <FileText />
            <span style={{ marginLeft: '5px' }}>Resume</span>
          </Link>
        </Row>
      </div>
    </>
  );
};

export default Homepage;

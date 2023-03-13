import React from 'react';
import { Text, User, Divider, Grid, Tag, Spacer, Col, Badge, Link, useToasts, Tooltip } from '@geist-ui/react';
import { Github, FileText, Instagram, Twitter, Linkedin, Mail } from '@geist-ui/react-icons';
import { articles } from './Articles';

/**
 * Homepage component
 */
export const Homepage = (props) => {
  const [toasts, setToast] = useToasts();
  const launchToast = (msg) => setToast({ text: msg, type: 'success', delay: 3000 });

  return (
    <>
      <div className="content-wrapper">
        <div style={{ marginTop: '1em' }}>
          <div className="profile-intro-container">
            <div>
              <img width={250} src="/img/thumbnail.png" alt="" style={{ borderRadius: '50%' }} />
            </div>
            <div>
              <h2>Hi!</h2>
              <span style={{ fontSize: '22px' }}>I&apos;m Rishabh, welcome to my corner of the internet :)</span>
            </div>
          </div>
        </div>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          I Worked
        </Divider>
        <Grid.Container style={{ flexWrap: 'wrap' }}>
          <a href="https://intuit.com">
            <Tag className="project-tag">@INTUIT</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://tamudatathon.com">
            <Tag className="project-tag">@TAMU_DATATHON</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://acelab.tamu.edu">
            <Tag className="project-tag">@ACELAB</Tag>
          </a>
        </Grid.Container>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          I Built
        </Divider>
        <Grid.Container style={{ flexWrap: 'wrap' }}>
          <a href="https://devpost.com/software/rekkme">
            <Tag className="project-tag">Rekkme</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://resuville.com/">
            <Tag className="project-tag">Resuville</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://wieat.vercel.app/">
            <Tag className="project-tag">WIEAT</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://tamudp.vercel.app/">
            <Tag className="project-tag">TAMUDP</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://spanalysis.vercel.app/">
            <Tag className="project-tag">S&amp;P Tracker</Tag>
          </a>
          <Spacer x={0.5} />
          <a href="https://github.com/tatiaris?tab=repositories">
            <Tag className="project-tag" style={{ fontWeight: 'bold' }}>
              . . .
            </Tag>
          </a>
        </Grid.Container>
        {/* <Divider style={{ marginTop: '2.5em' }} align="start">
          I Wrote
        </Divider>
        <Grid.Container style={{ paddingTop: '10px' }}>
          <ul>
            {Object.keys(articles).map((article_id, i) => (
              <li key={`article-${i}`}>
                <Link href={`/blog/${article_id}`} className={`blog-link ${articles[article_id].group}`}>
                  {articles[article_id].title}
                </Link>
              </li>
            ))}
          </ul>
        </Grid.Container> */}
        <Divider style={{ marginTop: '2.5em' }} align="start">
          I Enjoy
        </Divider>
        <Grid.Container style={{ flexWrap: 'wrap' }}>
          <Tag className="project-tag">Badminton</Tag>
          <Spacer x={0.5} />
          <Tag className="project-tag">Longboarding</Tag>
          <Spacer x={0.5} />
          <Tag className="project-tag">Racquetball</Tag>
          <Spacer x={0.5} />
          <Tag className="project-tag">Video/Board Games</Tag>
          <Spacer x={0.5} />
          <a href="/recommend-music">
            <Tag className="hobby music" type="success" invert>
              Music
            </Tag>
          </a>
        </Grid.Container>
        <Divider style={{ marginTop: '2.5em' }} align="start">
          I Use
        </Divider>
        <Grid.Container style={{ flexWrap: 'wrap' }}>
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
            <Link className="misc-link" target="_blank" rel="noreferrer" href="https://twitter.com/tatia_ris/" block>
              <Twitter />
            </Link>
          </Tooltip>
          <Tooltip text={'E-mail'} placement="bottom" enterDelay="1000">
            <Link className="misc-link" target="_blank" rel="noreferrer" href="mailto:tatiaris2001@gmail.com?Subject=Hello!" block>
              <Mail />
            </Link>
          </Tooltip>
          <Link download onClick={(e) => launchToast('Downloading Resume...')} className="misc-link" href="/docs/Rishabh-Tatia-Resume-01-23.pdf" block>
            <FileText />
            <span style={{ marginLeft: '5px' }}>Resume</span>
          </Link>
        </Grid.Container>
      </div>
    </>
  );
};

export default Homepage;

import React from "react";
import { Text, User, Divider, Row, Tag, Spacer, Col, Badge, Link, useToasts } from '@geist-ui/react'
import { Github, FileText, Instagram, Twitter, Linkedin, Mail } from '@geist-ui/react-icons'

/**
 * Homepage component
 */
export const Homepage = () => {
  const [toasts, setToast] = useToasts()
  const launchToast = (msg) => setToast({ text: msg, type: "success", delay: 3000 })

  return (
    <>
      <div className="content-wrapper">
        <Row style={{ alignItems: "center", flexWrap: "wrap", marginTop: "1em" }}>
          <Col style={{ width: "max-content", marginTop: "1em", marginRight: "1em" }}>
            <User src="img/avatar.png" altText="user-img" name="Rishabh Tatia" style={{ padding: "0" }}>
              Full Stack Developer
          </User>
          </Col>
          <Col style={{ width: "max-content", marginTop: "1em" }}>
            <Row>
              <Badge type="secondary"><a className="badge-link" href="https://intuit.com" target="_blank" rel="noreferrer">@INTUIT</a></Badge>
              <Spacer x={.5} />
              <Badge type="secondary"><a className="badge-link" href="https://acelab.tamu.edu" target="_blank" rel="noreferrer">@ACELAB</a></Badge>
              <Spacer x={.5} />
              <Badge type="secondary"><a className="badge-link" href="https://tamudatathon.com" target="_blank" rel="noreferrer">@TAMU_DATATHON</a></Badge>
            </Row>
          </Col>
        </Row>
        <br />
        <Divider align="start">My Life</Divider>
        <Text>
          <span style={{ fontSize: "1.2em" }}>Hello,</span><br />
        My name is <b>Rishabh Tatia</b>. I am a Junior at <a href="https://tamu.edu" className="about-link tamu" target="_blank" rel="noreferrer">Texas A&M University</a> studying Mathematics and Computer Science.
        I started programming as a freshman in high school when I wanted to develop games, automate processes, and create helpful applications for people around me.
      </Text>
        <ul>
          <li>I entered the world on the 3rd of January 2001 in <a href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh,+India/@28.7853139,59.1335284,3.83z/data=!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2195191!4d78.1842041" className="about-link city" target="_blank" rel="noreferrer">Gwalior, India</a>.</li>
          <li>I attended a boarding school for 4 years of my life, where I discovered my passion for sports and science.</li>
          <li>I moved to the U.S. in 2013, and attended high school in Chicago and Houston.</li>
          <li>I love playing sports and have played Table Tennis, Soccer, and Racquetball competitively.</li>
          <li>I enjoy participating in hackathons and am currently a developer and organizer for <a href="https://tamudatathon.com" className="about-link datathon" target="_blank" rel="noreferrer">TAMU Datathon</a>.</li>
          <li>I like listening to Alternative, Pop, EDM, Hip-hop and Rock music.</li>
          <li>I aim to spread the knowledge of programming and computer science as much as poossible.</li>
          <li>My life long goal is to travel and document as many places around the world as I can.</li>
        </ul>
        <Divider style={{ marginTop: "2.5em" }} align="start">My Hobbies & Interests</Divider>
        <Row style={{ flexWrap: "wrap" }}>
          <Tag className="hobby">Racquetball</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Longboarding</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Ping Pong</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Basketball</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Pool</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Video Games</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Board Games</Tag>
          <Spacer x={.5} />
          <Tag className="hobby">Speed Cubing</Tag>
        </Row>
        <Divider style={{ marginTop: "2.5em" }} align="start">My Links</Divider>
        <Row style={{ flexWrap: "wrap" }}>
          <Link className="misc-link" target="_blank" rel="noreferrer" href="https://github.com/tatiaris" block><Github /></Link>
          <Spacer x={.5} />
          <Link className="misc-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tatiaris/" block><Linkedin /></Link>
          <Spacer x={.5} />
          <Link className="misc-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/tat.ris/" block><Instagram /></Link>
          <Spacer x={.5} />
          <Link className="misc-link" target="_blank" rel="noreferrer" href="https://twitter.com/Rishabh77022392" block><Twitter /></Link>
          <Spacer x={.5} />
          <Link className="misc-link" target="_blank" rel="noreferrer" href="mailto:tatiaris2001@gmail.com?Subject=Hello!" block><Mail /></Link>
          <Spacer x={.5} />
          <Link download onClick={e => launchToast('Downloading Resume PDF...')} className="misc-link" href="/docs/RISHABH_TATIA_RESUME_12_20_v1.pdf" block><FileText /><span style={{ marginLeft: "5px" }}>Resume</span></Link>
        </Row>
      </div>

    </>
  );
};

export default Homepage;
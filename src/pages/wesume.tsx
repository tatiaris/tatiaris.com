import React, { useState, useEffect } from "react";
import { MFooter } from "../components/MFooter";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Table, Container, Button, Col, Row, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "prismjs/themes/prism-okaidia.css"
import Prism from 'prismjs';

const Wesume = (): React.ReactNode => {
  const user = {
    first_name: "Rishabh",
    last_name: "Tatia",
    full_name: "Rishabh Tatia",
    subtitle: 'Software Developer',
    personal_url: 'tatiaris.com',
    street_name: '301 Church Ave.',
    apt_no: 'A-346B',
    city: 'College Station',
    state: 'TX',
    zip_code: '77840',
    phone_no: '+1-713-208-0982',
    linkedin_url: 'tatiaris.com/linkedin',
    github_url: 'tatiaris.com/github',
    email_address: 'tatiaris2001@gmail.com',
    objective: "To obtain an entry-level software engineering/development position that will challenge me and allow me to utilize my past experiences and skills to mutually benefit both myself and my employer while allowing for future growth and advancement.",
    university: "Texas A&M University",
    university_start_day: 'Aug 2018',
    university_end_day: 'May 2022',
    major: 'B.S. in Applied Mathematics, Computer Science',
    university_gpa: 3.4,
    highschool: 'Memorial High Scchool',
    highschool_gpa: 3.5,
    relevant_courses: [
      {
        id: 1,
        relevant_course_name: 'Data Structures & Algorithms'
      },
      {
        id: 2,
        relevant_course_name: 'Discrete Math'
      },
      {
        id: 3,
        relevant_course_name: 'Programming Languages'
      },
      {
        id: 4,
        relevant_course_name: 'Linear Algebra'
      }
    ],
    work_experience: [
      {
        id: 1,
        work_name: 'TAMU Datathon',
        work_url: 'tamudatathon.com',
        work_start_day: 'June 2020',
        work_end_day: 'Present',
        work_role: 'Tech Director',
        bullets: [
          {
            id: 1,
            work_bullet: 'Organized the largest MLH Datathon event with 2000+ applicants, spanning 120+ majors and 120+ universities.'
          },
          {
            id: 2,
            work_bullet: 'Built an event and participant tracking system, implemented log-in/sign-up functionality, and created a progress logging Slack bot.'
          },
          {
            id: 3,
            work_bullet: "Worked in a team of 5 to develop the organization's open source website and tools."
          }
        ]
      },
      {
        id: 2,
        work_name: 'ACE Lab',
        work_url: 'acelab.tamu.edu',
        work_start_day: 'Feb 2020',
        work_end_day: 'Present',
        work_role: 'Full Stack Developer',
        bullets: [
          {
            id: 1,
            work_bullet: 'Published a data entry, visualization, analysis webapp for Interactive Episode Analysis.'
          },
          {
            id: 2,
            work_bullet: "Built the official lab website that serves over 12000 users per year."
          },
          {
            id: 3,
            work_bullet: "Redesigned, updated, and maintained several pages across the website."
          }
        ]
      },
      {
        id: 3,
        work_name: '4.0 Tutoring',
        work_url: 'fourotutoring.com',
        work_start_day: 'Sep 2019',
        work_end_day: 'Jan 2020',
        work_role: 'Full Stack Developer',
        bullets: [
          {
            id: 1,
            work_bullet: 'Redesigned the tutoring website to make it user-friendly.'
          },
          {
            id: 2,
            work_bullet: "Created a work logging and authenticating system."
          },
          {
            id: 3,
            work_bullet: "Assisted in increasing sales by 4% over the next semester."
          }
        ]
      }
    ],
    projects: [
      {
        id: 1,
        project_title: 'WIEAT',
        project_url: 'wieat.vercel.app',
        project_start_day: 'Oct 2020',
        project_end_day: 'Jan 2021',
        project_role: '',
        project_brief_description: 'Web-based Interactive Episode Analysis Tool',
        project_long_description: '',
        bullets: [
          {
            id: 1,
            project_bullet: 'Developed and published a data entry, visualization, and analysis web app.'
          },
          {
            id: 2,
            project_bullet: 'Automates the process of episode analysis hence increasing convenience, effectiveness, and efficiency during research.'
          },
          {
            id: 3,
            project_bullet: "Generates a centralized database of interactions and episodes."
          }
        ]
      },
      {
        id: 2,
        project_title: 'Ag Degree Planner',
        project_url: 'tamudp.vercel.app',
        project_start_day: 'Nov 2020',
        project_end_day: 'Dec 2020',
        project_role: '',
        project_brief_description: 'Web-app that creates/generates a degree plan for the user',
        project_long_description: '',
        bullets: [
          {
            id: 1,
            project_bullet: 'Centralized all required and helpful information for a degree on one page along with intuitive UI/UX, making the app easy to use.'
          },
          {
            id: 2,
            project_bullet: 'Frequent updates for new majors.'
          },
          {
            id: 3,
            project_bullet: "Scalable idea and implementation for several universities."
          }
        ]
      },
      {
        id: 3,
        project_title: 'Pathfinder',
        project_url: 'tatiaris.github.io/pathfinder',
        project_start_day: 'Nov 2020',
        project_end_day: 'Dec 2020',
        project_role: '',
        project_brief_description: 'Path finding algorithm visualizer',
        project_long_description: '',
        bullets: [
          {
            id: 1,
            project_bullet: 'Developed an interface that allows users to visualize how a path finding algorithm works.'
          },
          {
            id: 2,
            project_bullet: 'Implemented movable starting and ending positions along with animations, for ease of understanding.'
          },
          {
            id: 3,
            project_bullet: "Integrated functionality to add and remove impenetrable walls."
          }
        ]
      }
    ],
    activities: [
      {
        id: 1,
        activity_title: 'A&M Racquetball Club',
        activity_url: '',
        activity_start_day: 'Aug 2019',
        activity_end_day: 'Present',
        activity_role: '',
        activity_brief_description: 'Team Officer',
        activity_long_description: '',
        bullets: [
          {
            id: 1,
            activity_bullet: "Won Men's Singles and Doubles tournament against Texan universities at Aggieland Open 2020."
          },
          {
            id: 2,
            activity_bullet: "Won Men's Doubles tournament at UT Austin's 2020 Tournament."
          },
          {
            id: 3,
            activity_bullet: "Qualified for National Intercollegiate Racquetball Championship in 2020 (Cancelled due to Covid-19)."
          }
        ]
      },
      {
        id: 2,
        activity_title: 'Tamuhack 2020',
        activity_url: '',
        activity_start_day: 'Jan 2020',
        activity_end_day: 'Feb 2020',
        activity_role: '',
        activity_brief_description: "Spot 'Em (Australian Bush Fires Challenge)",
        activity_long_description: '',
        bullets: [
          {
            id: 1,
            activity_bullet: "Developed Spot 'Em, a web-app that would help identify and report endangered species."
          },
          {
            id: 2,
            activity_bullet: "Integrated Computer Vision and Google Maps to spot animals and notify authorities of their location."
          }
        ]
      }
    ],
    programming_languages: [
      {
        id: 1,
        programming_language: 'Typescript'
      },
      {
        id: 2,
        programming_language: 'Python'
      },
      {
        id: 3,
        programming_language: 'Java'
      },
      {
        id: 4,
        programming_language: 'C++'
      },
      {
        id: 5,
        programming_language: 'PHP'
      },
      {
        id: 6,
        programming_language: 'MySQL'
      },
      {
        id: 7,
        programming_language: 'Scheme'
      },
      {
        id: 8,
        programming_language: 'R'
      },
      {
        id: 9,
        programming_language: 'Verilog'
      }
    ],
    soft_skill: [
      {
        id: 1,
        soft_skill: ''
      }
    ],
    spoken_languages: [
      {
        id: 1,
        spoken_language: ''
      }
    ],
    technical_skills: [
      {
        id: 1,
        technical_skill: 'Next.js'
      },
      {
        id: 2,
        technical_skill: 'React'
      },
      {
        id: 3,
        technical_skill: 'Node.js'
      },
      {
        id: 4,
        technical_skill: 'Flask'
      },
      {
        id: 5,
        technical_skill: 'Django'
      },
      {
        id: 6,
        technical_skill: 'MongoDB'
      },
      {
        id: 7,
        technical_skill: 'SQL'
      },
      {
        id: 8,
        technical_skill: 'AWS'
      },
      {
        id: 9,
        technical_skill: 'JQuery'
      },
    ]
  }
  const rt_default_template = `<head>
  <style>
  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-4, .col-sm-6 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
</head>
<div id="resume-container" style="width: 1000px; padding: 0" class="container">
  <div style="margin: 0px; padding: 1em 0" class="row">
    <div class="col-sm-4">
      <h1 id="full_name"></h1>
      <h4 id="subtitle"></h4>
      <a id="personal_url" href="#" target="_blank" style="color: black; font-style: italic">
      </a>
    </div>
    <div class="dc1 col-sm-4">
      <div style="text-align: center;padding-top: 0.5em;">
        <span id="street_name"></span> <span id="apt_no"></span>
        <br />
        <span id="city"></span>
        <br />
        <span id="state"></span>, <span id="zip_code"></span>
      </div>
    </div>
    <div class="col-sm-4" style="display: flex; justify-content: right;">
      <div>
        <span id="phone_no"></span>
        <br />
        <a id="email_address" href="#" target="_blank" style="color: black; font-style: italic"></a>
        <br />
        <a id="linkedin_url" href="#" target="_blank" style="color: black; font-style: italic"></a>
        <br />
        <a id="github_url" href="#" target="_blank" style="color: black; font-style: italic"></a>
      </div>
    </div>
  </div>
  <div style="
      margin: 0px;
      padding: 1em;
      border-top: 1px solid #d9d9d9;
      display: flex;
      flex-wrap: wrap;
    ">
    <h3>Objective</h3>
    <span id="objective"></span>
  </div>
  <div style="margin: 0px; padding: 1em 0; border-top: 1px solid #d9d9d9" class="row">
    <div class="col-sm-6" style="border-right: 1px solid #d9d9d9;">
      <h3>Education</h3>
      <div class="section">
        <span style="float: right"><span id="university_start_day"></span> -
        <span id="university_end_day"></span
        ></span>
        <h5 id="university" style="font-weight: bold"></h5>
        <span style="float: right">GPA: <span id="university_gpa"></span></span><b id="major"></b>
        <br />Notable Courses:
        <span id="relevant_course_name_1"></span>,
        <span id="relevant_course_name_2"></span>,
        <br /><span id="relevant_course_name_3"></span
        >, <span id="relevant_course_name_4"></span>
      </div>
      <br />
      <h3>Experience</h3>
      <div class="section">
        <span style="float: right"><span id="work_start_day_1"></span> -
        <span id="work_end_day_1"></span
        ></span>
        <h5>
          <b id="work_name_1"></b>
          <a
            id="work_url_1"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="work_role_1"></b>
        <br />
        <ul>
          <li id="work_bullet_1_1"></li>
          <li id="work_bullet_1_2"></li>
          <li id="work_bullet_1_3"></li>
        </ul>
      </div>
      <div class="section">
        <span style="float: right"><span id="work_start_day_2"></span> -
        <span id="work_end_day_2"></span
        ></span>
        <h5>
          <b id="work_name_2"></b>
          <a
            id="work_url_2"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="work_role_2"></b>
        <br />
        <ul>
          <li id="work_bullet_2_1"></li>
          <li id="work_bullet_2_2"></li>
          <li id="work_bullet_2_3"></li>
        </ul>
      </div>
      <div class="section">
        <span style="float: right"><span id="work_start_day_3"></span> -
        <span id="work_end_day_3"></span
        ></span>
        <h5>
          <b id="work_name_3"></b>
          <a
            id="work_url_3"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="work_role_3"></b>
        <br />
        <ul>
          <li id="work_bullet_3_1"></li>
          <li id="work_bullet_3_2"></li>
          <li id="work_bullet_3_3"></li>
        </ul>
      </div>
      <br />
      <h3>Skills</h3>
      <h5><b>Languages</b></h5>
      <div style="display: flex; justify-content: center">
        <ul style="width: 33.3333%">
          <li id="programming_language_1"></li>
          <li id="programming_language_2"></li>
          <li id="programming_language_3"></li>
        </ul>
        <ul style="width: 33.3333%">
          <li id="programming_language_4"></li>
          <li id="programming_language_5"></li>
          <li id="programming_language_6"></li>
        </ul>
        <ul style="width: 33.3333%">
          <li id="programming_language_7"></li>
          <li id="programming_language_8"></li>
          <li id="programming_language_9"></li>
        </ul>
      </div>
      <h5><b>Technologies</b></h5>
      <div style="display: flex; justify-content: center">
        <ul style="width: 33.3333%">
          <li id="technical_skill_1"></li>
          <li id="technical_skill_2"></li>
          <li id="technical_skill_3"></li>
        </ul>
        <ul style="width: 33.3333%">
          <li id="technical_skill_4"></li>
          <li id="technical_skill_5"></li>
          <li id="technical_skill_6"></li>
        </ul>
        <ul style="width: 33.3333%">
          <li id="technical_skill_7"></li>
          <li id="technical_skill_8"></li>
          <li id="technical_skill_9"></li>
        </ul>
      </div>
    </div>
    <div class="col-sm-6">
      <h3>Projects</h3>
      <div class="section">
        <span style="float: right"><span id="project_start_day_1"></span> -
        <span id="project_end_day_1"></span
        ></span>
        <h5>
          <b id="project_title_1"></b>
          <a
            id="project_url_1"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="project_brief_description_1"></b>
        <ul>
          <li id="project_bullet_1_1"></li>
          <li id="project_bullet_1_2"></li>
          <li id="project_bullet_1_3"></li>
        </ul>
      </div>
      <div class="section">
        <span style="float: right"><span id="project_start_day_2"></span> -
        <span id="project_end_day_2"></span
        ></span>
        <h5>
          <b id="project_title_2"></b>
          <a
            id="project_url_2"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="project_brief_description_2"></b>
        <ul>
          <li id="project_bullet_2_1"></li>
          <li id="project_bullet_2_2"></li>
          <li id="project_bullet_2_3"></li>
        </ul>
      </div>
      <div class="section">
        <span style="float: right"><span id="project_start_day_3"></span> -
        <span id="project_end_day_3"></span
        ></span>
        <h5>
          <b id="project_title_3"></b>
          <a
            id="project_url_3"
            href="#"
            target="_blank"
            style="color: black; font-size: 1rem; font-style: italic"
          ></a>
        </h5>
        <b id="project_brief_description_3"></b>
        <ul>
          <li id="project_bullet_3_1"></li>
          <li id="project_bullet_3_2"></li>
          <li id="project_bullet_3_3"></li>
        </ul>
      </div>
      <br />
      <h3>Activities</h3>
      <div class="section">
        <span style="float: right"><span id="activity_start_day_1"></span> -
        <span id="activity_end_day_1"></span
        ></span>
        <h5><b id="activity_title_1"></b></h5>
        <b id="activity_brief_description_1"></b>
        <ul>
          <li id="activity_bullet_1_1"></li>
          <li id="activity_bullet_1_2"></li>
          <li id="activity_bullet_1_3"></li>
        </ul>
      </div>
      <div class="section">
        <span style="float: right"><span id="activity_start_day_2"></span> -
        <span id="activity_end_day_2"></span
        ></span>
        <h5><b id="activity_title_2"></b></h5>
        <b id="activity_brief_description_2"></b>
        <ul>
          <li id="activity_bullet_2_1"></li>
          <li id="activity_bullet_2_2"></li>
        </ul>
      </div>
    </div>
  </div>
</div>`
  const [code, setCode] = useState(``);

  const loadSampleCode = () => {
    document.getElementsByTagName('textarea')[0].value = rt_default_template;
    setCode(rt_default_template)
  }

  const checkAndModify = (obj, property, suffix="") => {
    if (typeof obj[property] == 'object') {
      obj[property].forEach(p => {
        const subProperties = Object.keys(p);
        subProperties.forEach(sp => {
          checkAndModify(p, sp, suffix + `_${p.id}`)
        });
      });
    } else {
      let e = document.getElementById(property + suffix)
      if (e) {
        e.innerHTML = obj[property];
        if (e.tagName == "A") {
          if (property == "email_address") e['href'] = `mailto:${obj[property]}`;
          else e['href'] = `https://${obj[property]}`;
        }
      }
    }
  }

  useEffect(() => {
    Prism.highlightAll()
    if (document) {
      document.getElementById("code-output").innerHTML = code;
      const properties = Object.keys(user);
      properties.forEach(p => {
        checkAndModify(user, p)
      });
    }
  }, [code])

  return (
    <>
        <Mheader title="Wesume"/>
        <script src="/js/Prism.js"></script>
        <Container style={{ margin: "2em auto", maxWidth: "none" }}>
          <Row style={{ margin: "1em" }}>
            <Col sm="4">
              <Alert variant="success" style={{ margin: "0", borderRadius: "0" }}>
                <h2>Your Data:</h2>
              </Alert>
              <pre style={{ margin: "0", borderRadius: "0", maxHeight: "1750px" }}>
                <code id="sample-user-container" className="language-javascript">
                  {JSON.stringify(user, null, 2)}
                </code>
              </pre>
            </Col>
            <Col sm="8">
              <Row style={{ margin: "0", marginBottom: "1em" }}>
                <Button onClick={loadSampleCode} variant="dark" style={{ float: "right", borderRadius: "0" }}>Load Sample Template Code</Button>
              </Row>
              <Row style={{ margin: "0" }}>
                <Col sm="6" style={{ padding: "0" }}>
                  <pre style={{ margin: "0", height: "20em", borderRadius: "0" }}>
                    <code id="code-container" className="language-html">
                      {code}
                    </code>
                  </pre>
                </Col>
                <Col sm="6" style={{ padding: "0" }}>
                  <textarea defaultValue={code} style={{ padding: "1em", minHeight: "2em", width: "100%", height: "20em", background: "#343a40", color: "white", border: "0", borderLeft: "1px solid white" }} onChange={e => setCode(e.target.value)} name="code-editor" id="code-editor" rows={1}></textarea>
                </Col>
              </Row>
              <Row style={{ margin: "1em 0" }}>
                <Col style={{ padding: "0" }}>
                  <div style={{ background: "white", boxShadow: "11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff", width: "max-content" }}>
                    <div id="code-output" style={{ margin: "1em", width: "1000px" }}>

                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          
        </Container>
    </>
  );
};

export default Wesume;
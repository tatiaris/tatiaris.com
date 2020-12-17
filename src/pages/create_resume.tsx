import React from "react";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CResume = (): React.ReactNode => {
  const downloadResume = () => {
    if (document) {
      const resumeElement = document.getElementById("resume-container");
      const data = { htmlCode: encodeURIComponent(resumeElement.innerHTML), pageHeight: resumeElement.offsetHeight };

      fetch('/api/html_to_pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
  return (
    <>
        <Mheader title="resume"/>
        <Mnavbar theme="light" page="resume"/>
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <div id="resume-container" style={{ boxShadow: "11px 11px 22px #bfbfbf, -11px -11px 22px #ffffff", padding: "2em", margin: "2em" }}>
          <div style={{ width: "1000px" }}>
          <div style={{ paddingBottom: "1em" }}>
            <table style={{ margin: "0px", width: "100%" }}>
              <tbody>
                <tr style={{ width: "33%", verticalAlign: "top" }}>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ flex: "0 0 100%", width: "100%", padding: "0 15px" }}>
                      <h1>Rishabh Tatia</h1>
                      <h4>Software Developer</h4>
                      <a href="https://tatiaris.com" target="_blank" style={{ color: "black", fontStyle: "italic" }}>tatiaris.com</a>
                    </div>
                  </th>
                  <th style={{ width: "34%", verticalAlign: "top", textAlign: "left" }}>
                    <div style={{ flex: "0 0 100%", width: "100%", padding: "0 15px", textAlign: "right" }}>
                      <div style={{ textAlign: "center", paddingTop: "0.5em" }}>
                        301 Church Ave. A-346B <br/>
                        College Station <br/>
                        TX, 77840
                      </div>
                    </div>
                  </th>
                  <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                    <div style={{ display: "flex", justifyContent: "right", flex: "0 0 100%", width: "100%", padding: "0 15px" }}>
                      <div style={{ float: "right" }}>
                        +1-713-208-0982 <br/>
                        <a href="mailto:tatiaris2001@gmail.com" target="_blank" style={{ color: "black", fontStyle: "italic" }}>tatiaris2001@gmail.com</a><br/>
                        <a href="https://tatiaris.com/linkedin" target="_blank" style={{ color: "black", fontStyle: "italic" }}>tatiaris.com/linkedin</a><br/>
                        <a href="https://tatiaris.com/github" target="_blank" style={{ color: "black", fontStyle: "italic" }}>tatiaris.com/github</a>
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ margin: "0px", padding: "1em", borderTop: "1px solid #d9d9d9", display: "flex", flexWrap: "wrap" }}>
            <h3>Objective</h3>
            To obtain an entry-level software engineering/development position that will challenge me and allow me to utilize my past experiences and skills to mutually benefit both myself and my employer while allowing for future growth and advancement.
          </div>
          <div style={{ paddingTop: "1em", borderTop: "1px solid #d9d9d9" }}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th style={{ width: "50%", verticalAlign: "top", textAlign: "left" }}>
                    <div style={{ borderRight: "1px solid #d9d9d9", flex: "0 0 100%", maxWidth: "100%", padding: "0 15px" }}>
                      <h3>Education</h3>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Aug 2018 - May 2022</span>
                        <h5 style={{ fontWeight: "bold" }}>Texas A&M University</h5><span style={{ float: "right" }}>GPA: 3.4</span>
                        <b>B.S. in Applied Mathematics, Computer Science</b><br/>
                        Notable Courses: Discrete Math, Linear Algebra, <br/>
                        Data Structures & Algorithms, Programming Languages
                      </div>
                      <br/>
                      <h3>Experience</h3>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>June 2020 - Present</span>
                        <h5><b>TAMU Datathon</b> <a href="https://tamudatathon.com" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>tamudatathon.com</a></h5>
                        <b>Tech Director</b><br/>
                        <ul>
                          <li>Organized the <b>largest MLH Datathon event</b> with 2000+ applicants, spanning 120+ majors and 120+ universities</li>
                          <li>Built an event and <b>participant tracking system</b>, implemented <b>log-in/sign-up functionality</b>, and created a progress logging Slack bot.</li>
                          <li>Worked in a team of 5 to develop the organization's <b>open source website and tools</b>.</li>
                        </ul>
                      </div>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Feb 2020 - Present</span>
                        <h5><b>ACE Lab</b> <a href="https://acelab.tamu.edu" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>acelab.tamu.edu</a></h5>
                        <b>Full Stack Developer</b><br/>
                        <ul>
                          <li>Published a <b>data entry, visualization, analysis webapp</b> for Interactive Episode Analysis.</li>
                          <li>Built the official lab website that serves over <b>12000 users</b> per year.</li>
                          <li>Redesigned, updated, and maintained several pages across the website.</li>
                        </ul>
                      </div>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Sept 2019 - Jan 2020</span>
                        <h5><b>4.0 Tutoring</b> <a href="https://fourotutoring.com" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>fourotutoring.com</a></h5>
                        <b>Full Stack Developer</b><br/>
                        <ul>
                          <li>Redesigned the tutoring website to make it <b>user-friendly</b>.</li>
                          <li>Created a work <b>logging and authenticating system</b>.</li>
                          <li>Assisted in <b>increasing sales by 4%</b> over the next semester.</li>
                        </ul>
                      </div>
                      <br/>
                      <h3>Skills</h3>
                      <h5><b>Languages</b></h5>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>Typescript</li>
                                <li>Python</li>
                                <li>Java</li>
                              </ul>
                            </th>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>C++</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                              </ul>
                            </th>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>Scheme</li>
                                <li>R</li>
                                <li>Verilog</li>
                              </ul>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                      <h5><b>Technologies</b></h5>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>Next.js</li>
                                <li>React</li>
                                <li>Node.js</li>
                              </ul>
                            </th>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>MongoDB</li>
                              </ul>
                            </th>
                            <th style={{ width: "33%", verticalAlign: "top", textAlign: "left" }}>
                              <ul>
                                <li>SQL</li>
                                <li>AWS</li>
                                <li>JQuery</li>
                              </ul>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </th>
                  <th style={{ width: "50%", verticalAlign: "top", textAlign: "left" }}>
                    <div style={{ flex: "0 0 100%", maxWidth: "100%", padding: "0 15px"  }}>
                      <h3>Projects</h3>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Oct 2020 - Jan 2021</span>
                        <h5><b>WIEAT</b> <a href="https://wieat.vercel.app" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>wieat.vercel.app</a></h5>
                        <b>Web-based Interactive Episode Analysis Tool</b>
                        <ul>
                          <li>Developed and published a <b>data entry, visualization, and analysis</b> web app.</li>
                          <li>Automates the process of episode analysis hence <b>increasing convenience, effectiveness, and efficiency</b> during research.</li>
                          <li>Generates a <b>centralized database</b> of interactions and episodes.</li>
                        </ul>
                      </div>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Nov 2020 - Dec 2020</span>
                        <h5><b>Ag Degree Planner</b> <a href="https://tamudp.vercel.app" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>tamudp.vercel.app</a></h5>
                        <b>Web-app that creates/generates a degree plan for the user.</b>
                        <ul>
                          <li><b>Centralized all required and helpful information</b> for a degree on one page along with <b>intuitive UI/UX</b>, making the app easy to use.</li>
                          <li>Frequent updates for new majors.</li>
                          <li><b>Scalable idea and implementation</b> for several universities.</li>
                        </ul>
                      </div>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Dec 2020</span>
                        <h5><b>Pathfinder</b> <a href="https://tatiaris.github.io/pathfinder" target="_blank" style={{ color: "black", fontSize: "1rem", fontStyle: "italic" }}>tatiaris.github.io/pathfinder</a></h5>
                        <b>Path finding algorithm visualizer.</b>
                        <ul>
                          <li>Developed an interface that allows users to visualize how a <b>path finding algorithm</b> works.</li>
                          <li>Implemented <b>movable starting and ending positions</b> along with animations, for ease of understanding.</li>
                          <li>Integrated functionality to add and remove impenetrable walls.</li>
                        </ul>
                      </div>
                      <br/>
                      <h3>Activities</h3>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>August 2019 - Current</span>
                        <h5><b>A&M Racquetball Club</b></h5>
                        <b>Team Officer</b>
                        <ul>
                          <li><b>Won Men's Singles and Doubles tournament</b> against Texan universities at Aggieland Open 2020.</li>
                          <li><b>Won Men's Doubles tournament</b> at UT Austin's 2020 Tournament.</li>
                          <li>Qualified for National Intercollegiate Racquetball Championship in 2020 (Cancelled due to Covid-19).</li>
                        </ul>
                      </div>
                      <div className="section" style={{ marginTop: "1rem" }}>
                        <span style={{ float: "right" }}>Jan 2020</span>
                        <h5><b>Tamuhack 2020</b></h5>
                        <b>Spot 'Em (Australian Bush Fires Challenge)</b>
                        <ul>
                          <li>Developed Spot 'Em, a web-app that would help <b>identify and report endangered species</b>.</li>
                          <li>Integrated <b>Computer Vision and Google Maps</b> to spot animals and notify authorities of their location.</li>
                        </ul>
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          </div>
          <Button className="neuro-btn" href="/docs/RISHABH_TATIA_RESUME_12_20_v2.pdf" as="a" download={true}>Download Resume</Button>
        </div>
    </>
  );
};

export default CResume;
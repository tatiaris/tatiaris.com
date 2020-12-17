import React from "react";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";

const About = (): React.ReactNode => {
  return (
    <>
        <Mheader title="about"/>
        <Mnavbar theme="light" page="about"/>
        <div className="page-container">
            <div className="about-container">
                <div className="about-me-text-container">
                    <div className="title-container flex-left">
                        Hello,
                    </div>
                    <div className="about-me">
                        My name's Rishabh. I am a Junior at <a href="https://www.tamu.edu" style={{ color: "maroon" }} target="_blank">Texas A&M University</a> studying Computer Science. Here's a little bit about me!
                        <ul className="bullets-container">
                            <li className="bullet">I was born in <a style={{ color: "green" }} target="_blank" href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh,+India/@28.7853139,59.1335284,3.83z/data=!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2195191!4d78.1842041">Gwalior, India.</a></li>
                            <li className="bullet">I moved to the U.S. in 2013.</li>
                            <li className="bullet">I am currently a part-time web developer for <a href="https://acelab.tamu.edu" target="_blank" style={{ color: "maroon" }}>ACELAB</a>.</li>
                            <li className="bullet">I am also on the developer team for <a href="https://tamudatathon.com" target="_blank" style={{ color: "#824e90" }}>TAMU Datathon</a>.</li>
                            <li className="bullet">I have been programming since my freshman year of high school.</li>
                            <li className="bullet">I am on the <span style={{ color: "maroon" }}>A&M Racquetball</span> inter-collegiate team.</li>
                            <li className="bullet">I LOVE innovating and creating new software.</li>
                            <li className="bullet">One of my goals in life is to share my knowledge of computer science with as many people as possible.</li>
                        </ul>
                        <span className="end-note">(Take a peak at some more of my interests <span className="direction"></span>)<br/><br/></span>
                    </div>
                </div>
                <div className="my-interests-container">
                    <div className="interest flex-center" style={{ backgroundColor: "#8be88b"}}>Hiking</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#f96c6c"}}>Ping Pong</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#fffd83"}}>Pool</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#ecebeb"}}>Board Games</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#ac73f0"}}>Magic</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#b1ecec"}}>FIFA</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#f0c473"}}>Rocket League</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#f07373"}}>Warzone</div>
                    <div className="interest flex-center" style={{ backgroundColor: "#fffd83"}}>Speed Cubing</div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;

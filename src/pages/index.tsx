import React from "react";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";

const Home = (): React.ReactNode => {
  return (
    <>
        <Mheader title="home"/>
        <Mnavbar theme="light" page="home"/>
        <div className="sections-container">
            <a href="/projects" className="major-section darkest hover-top hover-bg">PROJECTS</a>
            <a href="/about" className="major-section dark hover-top hover-bg">ABOUT</a>
            <a href="/contact" className="major-section light hover-top hover-bg">CONTACT</a>
            <div className="links-section-container lightest">
                <div className="links-section">
                    <a href="https://github.com/tatiaris" className="link hover-right github" target="_blank">GITHUB</a>
                    <a href="https://www.linkedin.com/in/tatiaris/" className="link hover-right linkedin" target="_blank">LINKEDIN</a>
                    <a href="/resume" className="link hover-right resume" target="_blank">RESUME</a>
                    <a href="https://open.kattis.com/users/rishabh-tatia" className="link hover-right kattis" target="_blank">KATTIS</a>
                    <a href="https://www.instagram.com/tat.ris/" className="link hover-right insta" target="_blank">INSTAGRAM</a>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;

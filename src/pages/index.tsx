import React, { useState, useEffect } from "react";
import { MFooter } from "../components/MFooter";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Table, Container, Button, Col, Row } from "react-bootstrap";
import { ThBtn } from "../components/style"

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
                    <a href="https://github.com/tatiaris" className="link hover-right github">GITHUB</a>
                    <a href="https://www.linkedin.com/in/rishabh-tatia-164bb5170/" className="link hover-right linkedin">LINKEDIN</a>
                    <a href="https://tatia.me/resume.pdf" className="link hover-right resume">RESUME</a>
                    <a href="https://open.kattis.com/users/rishabh-tatia" className="link hover-right kattis">KATTIS</a>
                    <a href="https://www.instagram.com/tat.ris/" className="link hover-right insta">INSTAGRAM</a>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;

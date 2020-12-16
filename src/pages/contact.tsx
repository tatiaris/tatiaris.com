import React, { useState, useEffect } from "react";
import { MFooter } from "../components/MFooter";
import { Mheader } from "../components/Mheader";
import { Mnavbar } from "../components/Mnavbar";
import { Table, Container, Button, Col, Row } from "react-bootstrap";
import { ThBtn } from "../components/style"

const Contact = (): React.ReactNode => {
  return (
    <>
        <Mheader title="contact"/>
        <Mnavbar theme="light" page="contact"/>
        <div className="page-container">
            <div className="contact-container">
                <div className="contact-title-container flex-left">Contact Me</div>
                <div className="contact-info-form-container">
                    <div className="contact-info-container">
                        Feel free to contact me using this form or any of my linked social media. I will respond as soon as I can!
                        <div className="social-links-container">
                            <div className="social-link-box-top">
                                <a href="https://www.linkedin.com/in/rishabh-tatia-164bb5170/" className="social-link linkedin-link">LINKEDIN</a>
                                <a href="https://www.instagram.com/tat.ris/" className="social-link instagram-link">INSTAGRAM</a>
                            </div>
                            <div className="social-link-box-bot">
                                <a href="https://twitter.com/Rishabh77022392" className="social-link twitter-link">TWITTER</a>
                                <a href="mailto:tatiaris2001@gmail.com?Subject=Hello!" className="social-link email-link">EMAIL</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;

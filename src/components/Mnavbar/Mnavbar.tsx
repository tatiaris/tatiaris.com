import React from "react";
import { MnavbarProps } from "../interfaces";
import PropTypes from "prop-types";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

/**
 * Mnavbar component
 */
export const Mnavbar: React.FC<MnavbarProps> = (props) => {
  let feature = {
    "home": "",
    "projects" : "",
    "about": "",
    "contact": ""
  }
  feature[props.page] = "selected"

  const open_menu = () => {
    console.log('opening menu');
    var x = document.getElementById("my-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }

  return (
    <>
        <header>
            <div className="flex-center nav-bar-container">
                <div className="name-container">
                    <div className="first-name">Rishabh</div>
                    <div className="last-name">Tatia</div>
                </div>
                <div className="menu-container">
                    <a href="/" className={`menu-option ${feature['home']} hover-top menu-bg`}>Home</a>
                    <a href="/projects" className={`menu-option ${feature['projects']} hover-top menu-bg`}>Projects</a>
                    <a href="/about" className={`menu-option ${feature['about']} hover-top menu-bg`}>About</a>
                    <a href="/contact" className={`menu-option ${feature['contact']} hover-top menu-bg`}>Contact</a>
                </div>
                <button onClick={open_menu} className="menu-icon-container flex-center"><i className="fa fa-bars"></i></button>
            </div>
            <div id="my-links">
                <a href="/" className="ham-menu-option selected hover-right menu-bg">Home</a>
                <a href="/projects" className="ham-menu-option hover-right menu-bg">Projects</a>
                <a href="/about" className="ham-menu-option hover-right menu-bg">About</a>
                <a href="/contact" className="ham-menu-option hover-right menu-bg">Contact</a>
            </div>
        </header>
    </>
  );
};

Mnavbar.propTypes = {
  theme: PropTypes.any.isRequired,
  page: PropTypes.any.isRequired,
};

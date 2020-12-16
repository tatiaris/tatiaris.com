import React from "react";
import { ProjectProps } from "../interfaces";
import PropTypes from "prop-types";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

/**
 * Project component
 */
export const Project: React.FC<ProjectProps> = (props) => {

  return (
    <>
      <div className="proj-container">
          <div className="proj-img-container">
              <img src={`/img/${props.info.img}`} className="proj-img" alt=""/>
          </div>
          <div className="proj-info-container">
              <div className="proj-name">{props.info.name}</div>
              <div className="proj-description">
                  {props.info.description}
                  <br/><br/>Main Features:
                  <ul className="proj-features">
                      {props.info.features.map((f, i) => <div key={`feature-${props.info.id}-${i}`}><li>{f.name}</li>&gt; {f.description}</div> )}
                  </ul>
              </div>
              <div className="proj-links-container">
                  <a target="_blank" href={props.info.github_link} className="proj-link github-link">Github</a>
                  <a target="_blank" href={props.info.demo_link} className="proj-link live-link">Live Demo</a>
              </div>
          </div>
          <div className="proj-tags-container flex-center">
              <div className="proj-tag-list">
                {props.info.tools.map((t, i) => <div key={`tech-${props.info.id}-${i}`} className="proj-tag nodejs-tag">{t}</div> )}
              </div>
          </div>
      </div>
    </>
  );
};

Project.propTypes = {
  info: PropTypes.any.isRequired
};

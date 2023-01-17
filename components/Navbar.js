import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Grid, Loading } from '@geist-ui/react';
import { Homepage } from './Homepage';
import { BookOpen, Home, Monitor, Paperclip } from '@geist-ui/react-icons';

/**
 * GeistNavbar component
 */
export const Navbar = (props) => {
  return (
    <div className="nav">
      <a className={`underline ${props.page == 'home' && 'active'}`} href="/">
        <div className="nav-item">
          <Home className="nav-symbol" /> HOME
        </div>
      </a>
      <a className={`underline ${props.page == 'projects' && 'active'}`} style={{ marginLeft: '20px' }} href="/projects">
        <div className="nav-item">
          <Monitor className="nav-symbol" /> PROJECTS
        </div>
      </a>
      <a className={`underline ${props.page == 'blog' && 'active'}`} style={{ marginLeft: '20px' }} href="/blog">
        <div className="nav-item">
          <BookOpen className="nav-symbol" /> BLOG
        </div>
      </a>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.any.isRequired
};

export default Navbar;

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Row, Loading } from '@geist-ui/react';
import { Homepage } from './Homepage';
import { BookOpen, Home, Monitor, Paperclip } from '@geist-ui/react-icons';

/**
 * GeistNavbar component
 */
export const Navbar = (props) => {
  return (
    <div className="nav">
      <a className={`underline ${props.page == 'home' && 'active'}`} href="/">
        <div style={{ display: 'flex', gap: '5px' }}>
          <Home /> HOME
        </div>
      </a>
      <a className={`underline ${props.page == 'projects' && 'active'}`} href="/projects">
        <div style={{ display: 'flex', gap: '5px' }}>
          <Monitor /> PROJECTS
        </div>
      </a>
      <a className={`underline ${props.page == 'blog' && 'active'}`} href="/blog">
        <div style={{ display: 'flex', gap: '5px' }}>
          <BookOpen /> BLOG
        </div>
      </a>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.any.isRequired
};

export default Navbar;

import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Tabs, Row, Loading } from '@geist-ui/react'
import { Homepage } from "./Homepage"
import { Home, Monitor } from '@geist-ui/react-icons'

/**
 * GeistNavbar component
 */
export const GeistNavbar = (props) => {
  const Projects = lazy(() => import('./Projects'));
  return (
    <Tabs initialValue="home" hideDivider className={`nav-tabs-${props.theme}`}>
      <Tabs.Item label={<><Home/>HOME</>} value="home"><Homepage {...props} /></Tabs.Item>
      <Tabs.Item label={<><Monitor/>PROJECTS</>} value="projects">
        <Suspense fallback={<Row style={{ padding: '10px 0' }}><Loading /></Row>}>
          <Projects {...props} />
        </Suspense>
      </Tabs.Item>
    </Tabs>
  );
};

GeistNavbar.propTypes = {
  theme: PropTypes.any.isRequired,
};

export default GeistNavbar;
import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Tabs, Row, Loading } from '@geist-ui/react'
import { Homepage } from "./Homepage"

/**
 * GeistNavbar component
 */
export const GeistNavbar = (props) => {
  const Projects = lazy(() => import('./Projects'));
  return (
    <Tabs initialValue="home" hideDivider>
      <Tabs.Item label="HOME" value="home"><Homepage /></Tabs.Item>
      <Tabs.Item label="PROJECTS" value="projects">
        <Suspense fallback={<Row style={{ padding: '10px 0' }}><Loading /></Row>}>
          <Projects />
        </Suspense>
      </Tabs.Item>
    </Tabs>
  );
};

GeistNavbar.propTypes = {
  theme: PropTypes.any.isRequired,
};

export default GeistNavbar;
import React from "react";
import PropTypes from "prop-types";
import { Tabs } from '@geist-ui/react'
import { Homepage } from "./Homepage"
import { Projects } from "./Projects"

/**
 * GeistNavbar component
 */
export const GeistNavbar = (props) => {
  return (
    <Tabs initialValue="home" hideDivider>
      <Tabs.Item label="HOME" value="home"><Homepage/></Tabs.Item>
      <Tabs.Item label="PROJECTS" value="projects"><Projects/></Tabs.Item>
    </Tabs>
  );
};

GeistNavbar.propTypes = {
  theme: PropTypes.any.isRequired,
};

export default GeistNavbar;
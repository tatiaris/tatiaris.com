import React from 'react';
import PropTypes from 'prop-types';
import { Text, Divider } from '@geist-ui/react';

/**
 * GeistNavbar component
 */
export const Copyright = (props) => {
  const currentYear = new Date().getFullYear();
  const nextYear = new Date().getFullYear() + 1;
  return (
    <>
      <Divider></Divider>
      <Text small style={{ float: 'right' }} type="secondary" className={`copyright-statement ${props.theme}`}>
        Copyright © {currentYear} - {nextYear} <a href="/">Rishabh Tatia</a>
      </Text>
    </>
  );
};

Copyright.propTypes = {
  theme: PropTypes.any.isRequired
};

export default Copyright;

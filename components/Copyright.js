import React from 'react';
import PropTypes from 'prop-types';
import { Text, Divider } from '@geist-ui/react';
/**
 * GeistNavbar component
 */
export const Copyright = (props) => {
  return (
    <>
      <Divider></Divider>
      <Text small style={{ float: 'right' }} type="secondary" className={`copyright-statement ${props.theme}`}>
        Copyright © 2020 - 2021 <a href="/">Rishabh Tatia</a>
      </Text>
    </>
  );
};

Copyright.propTypes = {
  theme: PropTypes.any.isRequired
};

export default Copyright;

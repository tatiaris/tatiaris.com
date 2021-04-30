import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

/**
 * GeistNavbar component
 */
export const CustomHead = (props) => {
  return (
    <Head>
      <title>{props.pageDetails.title}</title>
      <link rel="icon" href={`/${props.pageDetails.icon}`} />
      <meta name="description" content={props.pageDetails.description} />
      <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
      <meta property="og:title" content={props.pageDetails.title} />
      <meta property="og:site_name" content="Rishabh Tatia" />
      <meta property="og:url" content={props.pageDetails.url} />
      <meta property="og:description" content={props.pageDetails.description} />
      <meta property="og:type" content="profile" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@Rishabh77022392" />
      <meta name="twitter:title" content={props.pageDetails.title} />
      <meta name="twitter:description" content={props.pageDetails.description} />
      <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/33273930?v=4" />
      <meta httpEquiv="content-language" content="en" />
    </Head>
  );
};

CustomHead.propTypes = {
  pageDetails: PropTypes.any.isRequired
};

export default CustomHead;

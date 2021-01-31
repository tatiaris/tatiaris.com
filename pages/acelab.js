import React, { useEffect, useState } from 'react';
import Copyright from '../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row, Button, Spacer } from '@geist-ui/react';
import { ArrowRight } from '@geist-ui/react-icons';
import CustomHead from '../components/CustomHead';

const Acelab = () => {
  const pageDetails = {
    title: 'Acelab Object Generator',
    description: 'Helper software to generate js objects for acelab',
    icon: 'favicon.ico',
    url: 'tatiaris.com/acelab'
  };

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>acelab</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <Copyright theme="light" />
    </Page>
  );
};

export default Acelab;

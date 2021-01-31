import React, { useEffect, useState } from 'react';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row, Button, Spacer } from '@geist-ui/react';
import CustomHead from '../../components/CustomHead';

const Project = () => {
  const pageDetails = {
    title: 'Compass that is golden',
    description: 'leads to where you most desire',
    icon: 'favicon.ico',
    url: 'tatiaris.com/compass'
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log(
        'available',
        navigator.geolocation.getCurrentPosition((p) => {
          console.log(p.coords);
        })
      );
    }
  }, []);

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>compass</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;
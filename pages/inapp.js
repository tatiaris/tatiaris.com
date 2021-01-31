import React from 'react';
import { Page, Breadcrumbs, Image, Text, Description, Button, Spacer } from '@geist-ui/react';
import CustomHead from '../components/CustomHead';

const Inapp = () => {
  const pageDetails = {
    title: 'Inappropriate Content Page',
    description: 'Testbed page for the www filter extension',
    icon: 'favicon.ico',
    url: 'tatiaris.com/inapp'
  };

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>inapp</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <Spacer y={2} />
      <Text h4>Text Examples</Text>
      <Spacer y={1} />
      <Description title="Appropriate Text" content="This section contains only appropriate and safe for work text data." />
      <Spacer y={1} />
      <Description title="Inappropriate Text" content="This section fuckin only contains shit that is never fkin safe for work bitch." />
      <Spacer y={2} />
      <Text h4>Image Examples</Text>
      <Spacer y={1} />
      <Image src="/img/www_filter/not_gore_example.jpeg"></Image>
      <Spacer y={1} />
      <Image src="/img/www_filter/gore_example.jpg"></Image>
    </Page>
  );
};

export default Inapp;

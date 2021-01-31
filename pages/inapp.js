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
      <Description
        title="Appropriate Text"
        content="The short began with Chloe Fineman giving us her best Nicole Kidman, as she crooned The Undoing‘s opening tune, “Dream a Little Dream of Me.” (“Did you notice my coat?” she asks.) From there we were served new renditions of the songs from Bridgerton (by way of Lady Whistledown aka Julie Andrews), The Mandalorian, The Queen’s Gambit, Succession and more, as Cecily Strong, Kate McKinnon, Beck Bennett, Melissa Villaseñor, Pete Davidson, Kyle Mooney, Alex Moffat and all stepped in to exercise their vocal talents."
      />
      <Spacer y={1} />
      <Description
        title="Inappropriate Text"
        content="Why are men like diapers? They’re usually full of shit, but thankfully disposable.
What did one butt cheek say to the other? Together, we can stop this shit. 
What did the hurricane say to the coconut tree? Hold on to your nuts, this ain’t no ordinary blowjob. 
Which sexual position produces the ugliest kids? Ask your mum!"
      />
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

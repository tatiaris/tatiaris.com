import { Code } from '@geist-ui/react';
import ThemeChangeExample from './blog/ThemeChangeExample';

export const articles = {
  'organizing-website-themes': {
    title: 'Organizing Website Themes',
    description: 'A simple and efficient method of creating themes for a website',
    group: 'coding',
    date: '06/20/21',
    content: (
      <>
        <br />
        <br />
        A simple and efficient method of creating themes for a website.
        <br />
        <br />
        Start by creating a class for each theme you would like to create.
        <Code block>{`.light {
}
.dark {
}
.cool-theme {
}`}</Code>
        Then fill the classes with all the variable colors they will change respectively.
        <Code block>{`.light {
  --regular-text-color: black;
  --heading-text-color: red;
  --main-bg-color: white;
}
.dark {
  --regular-text-color: white;
  --heading-text-color: violet;
  --main-bg-color: black;
}
.cool-theme {
  --regular-text-color: lime;
  --heading-text-color: yellow;
  --main-bg-color: darkgrey;
}`}</Code>
        Assign your default theme class to your body element so all chlidren components inherit the themed variables.
        <Code block>{`<html lang="en">
  <head>...</head>
  <body class="light">
    .
    .
    .
  </body>
</html>`}</Code>
        Now we can use the theme variables to dictate properties of our web elements.
        <Code block>{`.container {
  color: var(--regular-text-color);
  background-color: var(--main-bg-color);
}
.modal-heading {
  color: var(--heading-text-color);
}
`}</Code>
        Finally, we can use Javascript to simply change the theme being used by modifying the body element class.
        <Code block>{`document.body.classList.remove('light');
document.body.classList.add('dark');`}</Code>
        Example:
        <ThemeChangeExample />
      </>
    )
  }
};

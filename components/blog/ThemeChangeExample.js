import React, { useState } from 'react';
import { Button } from '@geist-ui/react';

/**
 * GeistNavbar component
 */
export const ThemeChangeExample = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const changeTheme = () => {
    if (currentTheme == 'light') {
      setCurrentTheme('dark');
    } else if (currentTheme == 'dark') {
      setCurrentTheme('night');
    } else {
      setCurrentTheme('light');
    }
  };

  return (
    <>
      <div className={`theme-tutorial-container ${currentTheme}`}>
        <div>
          Press &apos;change&apos; to change the theme and <span className="link-text">inspect element</span> to see the class change.
        </div>
        <Button size="mini" onClick={changeTheme}>
          change
        </Button>
      </div>
    </>
  );
};

export default ThemeChangeExample;

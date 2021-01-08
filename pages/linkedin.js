import React, { useEffect } from "react";
import { Page } from '@geist-ui/react'

const Linkedin = () => {
  useEffect(() => {
    window.location.replace("https://linkedin.com/in/tatiaris/");
  }, [])

  return <Page>Redirecting to Linkedin...</Page>
};

export default Linkedin;

import React, { useEffect } from "react";
import { Page } from '@geist-ui/react'

const Github = () => {
  useEffect(() => {
    window.location.replace("http://github.com/tatiaris");
  }, [])

  return <Page>Redirecting to Github...</Page>
};

export default Github;

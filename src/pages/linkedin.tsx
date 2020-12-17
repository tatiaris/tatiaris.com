import React, { useEffect } from "react";

const Linkedin = (): React.ReactNode => {
  useEffect(() => {
    window.location.replace("https://linkedin.com/in/tatiaris/");
  }, [])

  return (
    <>Redirecting to Linkedin...</>
  );
};

export default Linkedin;

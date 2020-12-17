import React, { useEffect } from "react";

const Github = (): React.ReactNode => {
  useEffect(() => {
    window.location.replace("http://github.com/tatiaris");
  }, [])

  return (
    <>Redirecting to Github...</>
  );
};

export default Github;

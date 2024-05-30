import React from "react";

function Resume() {
  const iframeStyle = {
    width: "100%",
    border: "none",
    height: "100vh",

  };

  return (
    <iframe
      src={process.env.PUBLIC_URL + "/resume.pdf"}
      style={iframeStyle}
      title="resume"
    />
  );
}

export default Resume;

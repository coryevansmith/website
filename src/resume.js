import { Typography } from "@mui/material";
import React, { useState } from "react";

function Resume() {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
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

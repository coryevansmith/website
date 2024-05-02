import { Height } from "@mui/icons-material";
import { Typography, styled } from "@mui/material";
import React, { useState } from "react";

function Resume() {
  const iframeStyle = {
    width: "100%",
    border: "none",
    height: "calc(100vh - 10vh - 64px)",
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

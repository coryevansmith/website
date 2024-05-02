import { Typography } from "@mui/material";
import React, { useState } from "react";

function Resume() {
  return (
    <div>
      <iframe
        src={process.env.PUBLIC_URL + "/resume.pdf"}
        style={{ height: "100vh", width: "100vw" }}
        title="resume"
      />
    </div>
  );
}

export default Resume;

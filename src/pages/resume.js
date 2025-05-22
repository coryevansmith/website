import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";

function Resume() {
  const [loading, setLoading] = useState(true);

  const iframeStyle = {
    width: "100%",
    border: "none",
    height: "100vh",
    display: loading ? "none" : "block",
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Box className="box">
      {loading && <CircularProgress />}
      <iframe
        src={process.env.PUBLIC_URL + "/resume.pdf"}
        style={iframeStyle}
        onLoad={handleLoad}
        title="resume"
      />
    </Box>
  );
}

export default Resume;

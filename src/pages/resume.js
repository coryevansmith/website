import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

function Resume() {
  const [loading, setLoading] = useState(true);

  const iframeStyle = {
    width: "100%",
    border: "none",
    height: "100vh",
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <iframe
        src={process.env.PUBLIC_URL + "/resume.pdf"}
        style={iframeStyle}
        onLoad={handleLoad}
        title="resume"
      />
    </>
  );
}

export default Resume;

import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";

function Contact() {
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
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(34,34,34)",
        background:
          "linear-gradient(13deg, rgba(34,34,34,0.5830707282913166) 1%, rgba(246,246,246,1) 100%)",
        position: "relative",
        width: "100%",
      }}
    >
      {loading && <CircularProgress />}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScc2ln5n13BB2I-wijN2-lDLurhHTKyElIuBeExxWjV2r3Y4Q/viewform?embedded=true"
        style={iframeStyle}
        onLoad={handleLoad}
        title="contact"
      />
    </Box>
  );
}

export default Contact;

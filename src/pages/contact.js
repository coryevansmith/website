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
    <Box className="box">
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

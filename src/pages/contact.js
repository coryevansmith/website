import { Box } from "@mui/material";
import React from "react";

function Contact() {
  const iframeStyle = {
    width: "100%",
    border: "none",
    height: "100vh",
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(34,34,34)",
        background:
          "linear-gradient(13deg, rgba(34,34,34,0.5830707282913166) 1%, rgba(246,246,246,1) 100%)",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScc2ln5n13BB2I-wijN2-lDLurhHTKyElIuBeExxWjV2r3Y4Q/viewform?embedded=true"
        style={iframeStyle}
        title="contact"
      >
        Loading…
      </iframe>
    </Box>
  );
}

export default Contact;

import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

function Footer() {
  const handleOpenExternal = (link) => {
    window.location.href = link;
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "6rem",
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box flex={1}>
        <p>© 2024 Cory Evan Smith</p>
      </Box>
      <Box flex={1}>
        <IconButton
          color="secondary"
          onClick={() => {
            handleOpenExternal("https://www.linkedin.com/in/coryevansmith/");
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => {
            handleOpenExternal("https://github.com/coryevansmith");
          }}
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;

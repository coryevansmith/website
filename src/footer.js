import { Box, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10vh",
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>© 2024 Cory Evan Smith</p>
    </Box>
  );
}

export default Footer;

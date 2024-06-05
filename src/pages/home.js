import { Box, Typography } from "@mui/material";
import React from "react";
import backgroundPhoto from "../resources/frontPage.png";

function Home() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h1">CS Development</Typography>
    </Box>
  );
}

export default Home;

import { Box, Typography } from "@mui/material";
import React from "react";
// import backgroundPhoto from "../resources/frontPage.png";

function Home() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        // backgroundImage: `url(${backgroundPhoto})`,
        background: "rgb(34,34,34)",
        background:
          "linear-gradient(13deg, rgba(34,34,34,0.5830707282913166) 1%, rgba(246,246,246,1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h1">HOME PAGE UNDER CONSTRUCTION</Typography>
    </Box>
  );
}

export default Home;

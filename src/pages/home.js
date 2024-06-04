import { Box } from "@mui/material";
import React from "react";
import backgroundPhoto from "../resources/frontPage.jpg";

function Home() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
}

export default Home;

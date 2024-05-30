import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Icon,
} from "@mui/material";
import React from "react";
import backgroundPhoto from "../resources/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg";

function Home() {
  return (
    <Box
      style={{
        minHeight: "50rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${backgroundPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
}

export default Home;

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import homeImage from "../resources/profileImage.jpg";

function Home() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(13deg, rgba(34,34,34,0.5830707282913166) 1%, rgba(246,246,246,1) 100%)",
      }}
    >
      <Grid container>
        <Grid style={{ marginLeft: "2rem" }}>
          <Card
            style={{
              width: "30vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <CardMedia
              component="img"
              image={homeImage}
              alt="Home Image"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>
        <Grid style={{ marginLeft: "2rem" }}>
          <Card
            style={{
              width: "60vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <CardContent>
              <Typography variant="h3" gutterBottom>
                Cory Smith
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

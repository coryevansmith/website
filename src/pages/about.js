import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import profileImage from "../resources/profileImage.jpg";

function About() {
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
      }}
    >
      <Card
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={profileImage}
              alt="About Me Image"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                Hello, I'm Cory Smith, an enthusiastic and dedicated Application
                Developer based in Arlington, Texas. With a passion for
                technology and a drive to create innovative solutions, I am
                committed to delivering high-quality applications that enhance
                user experiences and improve customer satisfaction.
              </Typography>
              <Typography variant="body1" paragraph>
                In my current role at Neighborly, I have contributed to the
                development and launch of multiple new applications, all of
                which have received positive feedback from users. I take pride
                in my ability to collaborate effectively with cross-functional
                teams, and I have experience building a rules engine for a call
                center application that improved overall customer engagement.
                Additionally, I have a solid track record of reducing downtime
                and increasing system reliability through the maintenance of
                application endpoints.
              </Typography>
              <Typography variant="body1" paragraph>
                With a full-stack development background, my expertise spans a
                wide range of technologies, including React.js for front-end
                development and C#/.NET for back-end development. I'm also
                proficient in Java, JavaScript, Python, and more. I hold
                certifications in Java Development and Mobile App Development
                and am committed to continuously growing my skill set to stay
                ahead in this rapidly evolving field.
              </Typography>
              <Typography variant="body1" paragraph>
                Outside of work, I enjoy activities such as computer building,
                disc golf, music production, and video games. I am always eager
                to learn and grow both personally and professionally, and I look
                forward to collaborating with experienced professionals to
                create cutting-edge solutions that push the boundaries of
                technology. Feel free to connect with me on LinkedIn to learn
                more about my experience and projects.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default About;

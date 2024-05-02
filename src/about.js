import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import profileImage from "./resources/profileImage.jpg";

function About() {
  return (
    <Box
      style={{
        minHeight: "calc(100vh - 10vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
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
                user experiences and drive customer satisfaction.
              </Typography>
              <Typography variant="body1" paragraph>
                In my recent role at Neighborly, I played a key role in
                developing and launching two new applications, both of which
                have received rave reviews from over 10,000 users, with ratings
                of 4.5 stars or higher. I take pride in my ability to
                collaborate effectively with cross-functional teams, and my
                experience includes developing a rules engine that improved
                customer satisfaction by 25% for a call center application.
                Additionally, I have a proven track record of reducing downtime
                and increasing system reliability by maintaining endpoints for
                multiple applications.
              </Typography>
              <Typography variant="body1" paragraph>
                My expertise spans a wide range of technologies, including C#,
                .NET, Java, JavaScript, Python, and more. I am certified in Java
                Development and Mobile App Development, and I am constantly
                expanding my skill set to stay ahead in this rapidly evolving
                field.
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

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
    <Box className="box">
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
              image={profileImage}
              alt="About Me Image"
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
                In my previous role at Neighborly, I contributed to the
                development and launch of multiple new applications, all of
                which received positive feedback from users. I took pride in my
                ability to collaborate effectively with cross-functional teams
                and built a rules engine for a call center application that
                improved overall customer engagement. Additionally, I maintained
                application endpoints, reducing downtime and increasing system
                reliability.
              </Typography>
              <Typography variant="body1" paragraph>
                I have now transitioned to a new role as an Application
                Developer II at DR Horton. In this position, I am excited to
                bring my expertise in application development and system
                reliability to a new team, continuing to drive innovation and
                enhance user experiences.
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
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

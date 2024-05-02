import { Box, Container, Typography, Grid, Card } from "@mui/material";
import React from "react";
import profileImage from "./resources/profileImage.jpg";

function About() {
  return (
    <Box style={{ height: "calc(100vh - 10vh - 64px)" }}>
      {/* <Card>
        <h1>UNDER CONSTRUCTION</h1>
      </Card> */}
      <Typography variant="h1" align="center">
        UNDER CONSTRUCTION
      </Typography>
    </Box>

    // <Grid
    //   padding={"1rem"}
    //   container
    //   rowSpacing={1}
    //   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    // >
    //   <Grid xs={1}>
    //     <img
    //       src={profileImage}
    //       alt="About Me Image"
    //       style={{ height: "300px", width: "300px" }}
    //     />
    //   </Grid>
    //   <Grid xs={6}>
    //     <div>
    //       <h1>About</h1>
    //       <p>
    //         Hello, I'm Cory Smith, an enthusiastic and dedicated Application
    //         Developer based in Arlington, Texas. With a passion for technology
    //         and a drive to create innovative solutions, I am committed to
    //         delivering high-quality applications that enhance user experiences
    //         and drive customer satisfaction. In my recent role at Neighborly, I
    //         played a key role in developing and launching two new applications,
    //         both of which have received rave reviews from over 10,000 users,
    //         with ratings of 4.5 stars or higher. I take pride in my ability to
    //         collaborate effectively with cross-functional teams, and my
    //         experience includes developing a rules engine that improved customer
    //         satisfaction by 25% for a call center application. Additionally, I
    //         have a proven track record of reducing downtime and increasing
    //         system reliability by maintaining endpoints for multiple
    //         applications. My expertise spans a wide range of technologies,
    //         including C#, .NET, Java, JavaScript, Python, and more. I am
    //         certified in Java Development and Mobile App Development, and I am
    //         constantly expanding my skill set to stay ahead in this rapidly
    //         evolving field. Outside of work, I enjoy activities such as computer
    //         building, disc golf, music production, and video games. I am always
    //         eager to learn and grow both personally and professionally, and I
    //         look forward to collaborating with experienced professionals to
    //         create cutting-edge solutions that push the boundaries of
    //         technology. Feel free to connect with me on LinkedIn to learn more
    //         about my experience and projects.
    //       </p>
    //     </div>
    //   </Grid>
    // </Grid>
  );
}

export default About;

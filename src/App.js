import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Resume from "./resume";
import Home from "./home";
import Header from "./header";
import { Container } from "@mui/material";
import styled from "styled-components";
import Footer from "./footer";
import { Helmet } from "react-helmet";

function App() {
  const BodyContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  `;

  return (
    <>
      <Helmet>
        <title>CS Development</title>
        <meta
          name="description"
          content="Welcome to Cory Smith's website! Cory Smith is a passionate and dedicated
      full stack developer with a keen eye for detail and a love for
      problem-solving. With years of experience in both front-end and back-end
      development, Cory specializes in building responsive and user-friendly web
      applications."
        />
      </Helmet>
      <BodyContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BodyContainer>
    </>
  );
}

export default App;

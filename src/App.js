import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Resume from "./resume";
import Home from "./home";
import Header from "./header";
import { Container } from "@mui/material";
import styled from "styled-components";
import Footer from "./footer";

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

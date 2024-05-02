import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Resume from "./resume";
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
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BodyContainer>
    </>
  );
}

export default App;

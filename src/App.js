import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./home";
import Resume from "./resume";
import logo from "./resources/logo.png";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ marginRight: "10px", height: "50px" }}
            />
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/resume">
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

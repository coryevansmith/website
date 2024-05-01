import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./home";
import Resume from "./resume";
import logo from "./resources/logo.png";

function App() {
  return (
    <Router>
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
      <Container sx={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
